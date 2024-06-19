import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function ContactForm() {
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  document.querySelectorAll(".ripple").forEach((button) => {
    button.addEventListener("mousedown", function (e) {
      createRipple(e, button, "slow-ripple-effect");
    });

    button.addEventListener("mouseup", function () {
      removeRipple(button, "slow-ripple-effect");
    });

    button.addEventListener("click", function (e) {
      createRipple(e, button, "ripple-effect");
    });

    function createRipple(event, button, className) {
      const existingRipple = button.querySelector(`.${className}`);
      if (existingRipple) {
        existingRipple.remove();
      }

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
        ripple.addEventListener("animationend", () => {
          ripple.remove();
        });
      }
    }

    function removeRipple(button, className) {
      const existingRipple = button.querySelector(`.${className}`);
      if (existingRipple) {
        existingRipple.style.animation = "none";
        existingRipple.offsetHeight; /* trigger reflow */
        existingRipple.style.animation = null; /* restart animation */
        existingRipple.classList.add("ripple-effect");
        existingRipple.classList.remove(className);
        existingRipple.addEventListener("animationend", () => {
          existingRipple.remove();
        });
      }
    }
  });

  const submitHandler = async (data) => {
    setSending(true);
    try {
      const result = await axios.post(
        `${process.env.BACKEND_URL}api/send-email`,
        {
          subject: data.email,
          text: data.description,
        }
      );
      if (result.status === 200) {
        setSending(false);
        Swal.fire({
          title: "Thanks for the contact!",
          text: "I will be in touch with you soon!",
          icon: "success",
        });
        reset();
      }
    } catch (error) {
      alert("this is " + error);
      setSending(false);
      reset();
      Swal.fire({
        title: "Error!",
        text: "Sending contact email failed",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
  return (
    <>
      <div className="w-full h-full z-40 max-w-[600px] bg-gray-500/15 p-10 backdrop-blur-md animate-finite-pulse border-2 border-gray-300 rounded-lg">
        <h2 className="text-2xl text-center font-thin dark:text-white">
          Lets get in<span className=" font-semibold"> Touch</span>
        </h2>

        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="p-2">
            <div>
              <div className="my-2">
                <label className="text-lg dark:text-white ">Email</label>
              </div>
              <input
                name="email"
                type="email"
                className="border-slate-100 text-xl w-full min-h-[3rem] ring-slate-500 ring-2 border-2 rounded-md  shadow-lg"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p role="alert" className=" text-red-600 ">
                  *Email is required
                </p>
              )}
            </div>
            <div>
              <div className="my-2">
                <label className="text-lg dark:text-white">Description</label>
              </div>
              <textarea
                name="description"
                rows={7}
                className="border-slate-100 p-2 text-xl  w-full ring-slate-500 ring-2 border-2 rounded-md  shadow-lg"
                {...register("description", { required: true })}
              />
              {errors.description?.type === "required" && (
                <p role="alert" className="text-red-600">
                  *Description is required
                </p>
              )}
            </div>
          </div>
          <button
            disabled={sending}
            type="submit"
            className={`${
              sending ? "bg-black" : "bg-blue-500 "
            } ripple shadow-md border-3 p-2 text-white hover:text-black hover:bg-white  rounded-lg`}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
