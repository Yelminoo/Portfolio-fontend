import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollDemo = () => {
  const containerRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const bgRef1 = useRef(null);
  const bgRef2 = useRef(null);

  // State to manage positioning
  const [isFixed, setIsFixed] = useState(false); // Start as relative

  useEffect(() => {
    const animationDuration = 2000; // Duration of animation (scroll length)
    const vhPerSecond = window.innerHeight; // Full viewport height
    const containerHeight = Math.max(animationDuration, vhPerSecond);
    containerRef.current.style.height = `${containerHeight}px`;

    const scrollTriggerOptions = {
      start: "top center",
      end: "+=2000",
      scrub: 1,
      pin: true,
      pinSpacing: false,
      invalidateOnRefresh: true,
      onEnter: () => {
        setIsFixed(true); // Set to fixed when entering
      },
      onLeave: () => {
        setIsFixed(false); // Set to relative when leaving
      },
      onLeaveBack: () => {
        setIsFixed(true); // Set to fixed when scrolling back in
      },
      onEnterBack: () => {
        setIsFixed(true); // Set to fixed when entering back
      },
    };

    // Animate text 1
    gsap.fromTo(
      textRef1.current,
      { x: "50%" },
      {
        x: "-130%",
        scrollTrigger: {
          ...scrollTriggerOptions,
          trigger: textRef1.current,
        },
      }
    );

    // Animate text 2
    gsap.fromTo(
      textRef2.current,
      { x: "-50%" },
      {
        x: "130%",
        scrollTrigger: {
          ...scrollTriggerOptions,
          trigger: textRef2.current,
        },
      }
    );

    // Background animations for bgRef1
    gsap.fromTo(
      bgRef1.current,
      { x: "50%" },
      {
        x: "-100%",
        scrollTrigger: {
          ...scrollTriggerOptions,
          trigger: textRef1.current,
        },
      }
    );

    // Background animations for bgRef2
    gsap.fromTo(
      bgRef2.current,
      { x: "-50%" },
      {
        x: "100%",
        scrollTrigger: {
          ...scrollTriggerOptions,
          trigger: textRef2.current,
        },
      }
    );

    return () => {
      // Clean up on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className={`relative bg-white text-white ${
          isFixed ? "fixed" : "relative"
        }`}
      >
        {/* First Text Section with Background */}
        <div
          className={`fixed w-full h-screen flex justify-center  items-center pointer-events-none z-10`}
        >
          <div
            ref={bgRef1}
            className={`absolute inset-0 bg-black z-20 ${
              isFixed ? "fixed" : "relative"
            }`}
          ></div>
          <div
            ref={textRef1}
            className="absolute md:text-9xl sm:text-3xl font-bold text-white whitespace-nowrap z-40"
          >
            W E L C O M E
          </div>
          <div
            ref={bgRef2}
            className={`absolute inset-0 bg-black z-10 ${
              isFixed ? "fixed" : "relative"
            }`}
          ></div>
          <div
            ref={textRef2}
            className="absolute md:text-9xl sm:text-3xl font-bold text-white whitespace-nowrap z-50"
          >
            E M O C L E W
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollDemo;
