"use client";
import confetti from "canvas-confetti";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RainbowButton } from "../components/ui/rainbow-button";
import Swal from "sweetalert2";
export const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Ripple effect handling inside useEffect
  useEffect(() => {
    const buttons = document.querySelectorAll(".ripple");

    buttons.forEach((button) => {
      button.addEventListener("mousedown", (e) =>
        createRipple(e, button, "slow-ripple-effect")
      );
      button.addEventListener("mouseup", () =>
        removeRipple(button, "slow-ripple-effect")
      );
      button.addEventListener("click", (e) =>
        createRipple(e, button, "ripple-effect")
      );
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mousedown", createRipple);
        button.removeEventListener("mouseup", removeRipple);
        button.removeEventListener("click", createRipple);
      });
    };
  }, []);

  function createRipple(event, button, className) {
    const existingRipple = button.querySelector(`.${className}`);
    if (existingRipple) existingRipple.remove();

    const rect = button.getBoundingClientRect();
    const ripple = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - rect.left - radius}px`;
    ripple.style.top = `${event.clientY - rect.top - radius}px`;
    ripple.classList.add(className);

    button.appendChild(ripple);

    if (className === "ripple-effect") {
      ripple.addEventListener("animationend", () => ripple.remove());
    }
  }

  function removeRipple(button, className) {
    const existingRipple = button.querySelector(`.${className}`);
    if (existingRipple) {
      existingRipple.style.animation = "none";
      existingRipple.offsetHeight; // Trigger reflow
      existingRipple.style.animation = null; // Restart animation
      existingRipple.classList.add("ripple-effect");
      existingRipple.classList.remove(className);
      existingRipple.addEventListener("animationend", () =>
        existingRipple.remove()
      );
    }
  }

  const submitHandler = async (data) => {
    setSending(true);
    try {
      const result = await axios.post("/api/send-email", {
        subject: data.email,
        text: data.description,
      });

      console.log(result, "result");

      if (result.status === 200) {
        setSending(false);
        handleConfetti();
        reset();
        // Handle success, e.g. with a success modal/notification
        Swal.fire({
          title: "Contact Success!",
          text: "Message sent.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Email sending failed", error);
      setSending(false);
      reset();
      // Handle error, e.g. with a failure modal/notification
      Swal.fire({
        title: "Error!",
        text: "Failed to send message.",
        icon: "error",
      });
    }
  };

  const handleConfetti = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="w-full h-full z-40 max-w-[600px] bg-gray-500/15 p-10 backdrop-blur-md animate-finite-pulse border-2 border-gray-300 rounded-lg">
      <h2 className="text-2xl text-center font-thin dark:text-white">
        Let's get in <span className="font-semibold">Touch</span>
      </h2>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="p-2">
          <div className="my-2">
            <label className="text-lg dark:text-white">Email</label>
            <input
              name="email"
              type="email"
              className="border-slate-100 text-xl w-full min-h-[3rem] ring-slate-500 ring-2 border-2 rounded-md shadow-lg"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p role="alert" className="text-red-600">
                *Email is required
              </p>
            )}
          </div>

          <div className="my-2">
            <label className="text-lg dark:text-white">Description</label>
            <textarea
              name="description"
              rows={7}
              className="border-slate-100 p-2 text-xl w-full ring-slate-500 ring-2 border-2 rounded-md shadow-lg"
              {...register("description", { required: true })}
            />
            {errors.description?.type === "required" && (
              <p role="alert" className="text-red-600">
                *Description is required
              </p>
            )}
          </div>
        </div>

        <RainbowButton disabled={sending} type="submit">
          {sending ? "Sending..." : "Send"}
        </RainbowButton>
      </form>
    </div>
  );
};
