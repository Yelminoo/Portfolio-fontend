//import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
const FormModalBox = ({ isOpen, setIsOpen }) => {
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
          title: "Good job!",
          text: "You clicked the button!",
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
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-40 bg-gray-500/15 backdrop-blur-md">
          <div className="fixed w-2/3 md:w-1/3  backdrop-blur-lg h-2/3 z-30 bg-slate-300 p-10 rounded-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="overflow-visible"
              >
                <i className="fa-regular fa-circle-xmark fa-xl hover:text-red-500 active:text-gray-500"></i>
              </button>
            </div>
            <h2 className="text-2xl text-center">Contact </h2>
            <p className="w-20  h-1 bg-black m-auto"></p>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="p-2">
                <div>
                  <div className="my-2">
                    <label className="text-lg ">Email</label>
                  </div>
                  <input
                    name="email"
                    type="email"
                    className="border-slate-100 w-full ring-slate-500 ring-2 border-2 rounded-md  shadow-lg"
                    {...register("email", { required: true })}
                  />
                  {errors.email?.type === "required" && (
                    <p role="alert" className="text-red">
                      *Email is required
                    </p>
                  )}
                </div>
                <div>
                  <div className="my-2">
                    <label className="text-lg ">Description</label>
                  </div>
                  <textarea
                    name="description"
                    rows={7}
                    className="border-slate-100 w-full ring-slate-500 ring-2 border-2 rounded-md  shadow-lg"
                    {...register("description", { required: true })}
                  />
                  {errors.description?.type === "required" && (
                    <p role="alert" className="text-red">
                      *Description is required
                    </p>
                  )}
                </div>
              </div>
              <button
                disabled={sending}
                type="submit"
                className="bg-blue-500 ripple shadow-md border-3 p-2 text-white hover:text-black hover:bg-white  rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

FormModalBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default FormModalBox;
