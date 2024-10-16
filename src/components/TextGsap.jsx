import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ScrollDemo = () => {
  const containerRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const bgRef1 = useRef(null);
  const bgRef2 = useRef(null);

  // State to manage positioning
  const [isFixed, setIsFixed] = useState(false);

  useGSAP(() => {
    const animationDuration = 3000;
    const vhPerSecond = window.innerHeight;
    const containerHeight = Math.max(animationDuration, vhPerSecond);
    containerRef.current.style.height = `${containerHeight}px`;

    // Preload elements with gsap.set to avoid flickering
    gsap.set(
      [textRef1.current, textRef2.current, bgRef1.current, bgRef2.current],
      { opacity: 1 }
    );

    // Wait until the page is fully loaded before initializing animations
    window.onload = () => {
      // Scroll animation for textRef1 (moves left)
      gsap.fromTo(
        textRef1.current,
        { x: "0vw", opacity: 1 },
        {
          x: "-130vw",
          opacity: 0,
          scrollTrigger: {
            trigger: textRef1.current,
            start: "top center",
            end: "+=3000",
            invalidateOnRefresh: true,
            scrub: 1.5,
            onEnter: () => setIsFixed(true),
            onLeave: () => setIsFixed(false),
            onEnterBack: () => setIsFixed(true),
            onLeaveBack: () => setIsFixed(true),
          },
        }
      );

      // Scroll animation for textRef2 (moves right)
      gsap.fromTo(
        textRef2.current,
        { x: "0vw", opacity: 1 },
        {
          x: "130vw",
          opacity: 0,
          scrollTrigger: {
            trigger: textRef2.current,
            start: "top center",
            end: "+=3000",
            scrub: 1.5,
            invalidateOnRefresh: true,
            onEnter: () => setIsFixed(true),
            onLeave: () => setIsFixed(false),
            onEnterBack: () => setIsFixed(true),
            onLeaveBack: () => setIsFixed(true),
          },
        }
      );

      // Background animation for bgRef1 (moves left)
      gsap.fromTo(
        bgRef1.current,
        { x: "0vw" },
        {
          x: "-100vw",
          scrollTrigger: {
            trigger: bgRef1.current,
            start: "top center",
            invalidateOnRefresh: true,
            end: "+=3000",
            scrub: 1.5,
          },
        }
      );

      // Background animation for bgRef2 (moves right)
      gsap.fromTo(
        bgRef2.current,
        { x: "0vw" },
        {
          x: "100vw",
          scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: bgRef2.current,

            start: "top center",
            end: "+=3000",
            scrub: 1.5,
          },
        }
      );

      // Ensure ScrollTrigger is refreshed after setup
      ScrollTrigger.refresh();
    };

    return () => {
      // Clean up on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="min-h-[100vh] relative bg-white text-white"
      >
        {/* Main Section */}
        <div className="fixed w-full h-screen flex justify-center items-center pointer-events-none z-10">
          {/* Background Layers */}
          <div
            ref={bgRef1}
            className={`absolute inset-0 bg-black z-10 ${
              isFixed ? "fixed" : "relative"
            }`}
          ></div>
          <div
            ref={bgRef2}
            className={`absolute inset-0 bg-black z-9 ${
              isFixed ? "fixed" : "relative"
            }`}
          ></div>

          {/* Text */}
          <div
            ref={textRef1}
            className={`absolute md:text-9xl sm:text-3xl font-bold text-white whitespace-nowrap z-20 ${
              isFixed ? "fixed" : "relative"
            }`}
          >
            W E L C O M E
          </div>

          <div
            ref={textRef2}
            className={`absolute md:text-9xl sm:text-3xl font-bold text-white whitespace-nowrap z-20 ${
              isFixed ? "fixed" : "relative"
            }`}
          >
            E M O C L E W
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollDemo;
