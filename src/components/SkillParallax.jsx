// import React from "react";

import { useEffect } from "react";

function SkillParallax() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    //   addAnimation();
    // }
    addAnimation();
    addAnimation();
    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  return (
    <div
      className="scroller m-auto"
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      <ul className="tag-list scroller_inner">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>PHP</li>
        <li>Node</li>
        <li>React</li>
        <li>Express</li>
        <li>Laravel</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
      </ul>
    </div>
  );
}

export default SkillParallax;
