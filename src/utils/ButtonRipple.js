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
