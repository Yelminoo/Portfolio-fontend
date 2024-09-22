import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollDemo = () => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const bgRef1 = useRef(null); // Background for text 1 (lower z-index text)
  const bgRef2 = useRef(null); // Background for text 2 (higher z-index text)
  const imageRowRef1 = useRef(null); // Scroll left to right
  const imageRowRef2 = useRef(null); // Scroll right to left
  const images = Array.from(
    { length: 10 },
    (_, i) => `https://picsum.photos/800/1200?random=${i}`
  );

  useEffect(() => {
    // Text 1: Scroll from right to left with background
    gsap.fromTo(
      textRef1.current,
      { x: "100%" },
      {
        x: "-100%",
        scrollTrigger: {
          trigger: textRef1.current,
          start: "top center",
          end: "+=2000",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      }
    );

    // Text 2: Scroll from left to right with background
    gsap.fromTo(
      textRef2.current,
      { x: "-100%" },
      {
        x: "100%",
        scrollTrigger: {
          trigger: textRef2.current,
          start: "top center",
          end: "+=2000",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      }
    );

    // Background for Text 1 slides with the text
    gsap.fromTo(
      bgRef1.current,
      { x: "100%" },
      {
        x: "-100%",
        scrollTrigger: {
          trigger: textRef1.current,
          start: "top center",
          end: "+=2000",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      }
    );

    // Background for Text 2 slides with the text
    gsap.fromTo(
      bgRef2.current,
      { x: "-100%" },
      {
        x: "100%",
        scrollTrigger: {
          trigger: textRef2.current,
          start: "top center",
          end: "+=2000",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      }
    );

    // Image row 1: Scroll left to right
    gsap.fromTo(
      imageRowRef1.current,
      { x: "-100%" },
      {
        x: "100%",
        scrollTrigger: {
          trigger: imageRowRef1.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      }
    );

    // Image row 2: Scroll right to left
    gsap.fromTo(
      imageRowRef2.current,
      { x: "100%" },
      {
        x: "-100%",
        scrollTrigger: {
          trigger: imageRowRef2.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      }
    );
  }, []);

  return (
    <div className="relative h-[400vh] bg-black text-white">
      {/* First Text Section with Background */}
      <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center pointer-events-none z-10">
        <div ref={bgRef1} className="absolute inset-0 bg-black z-20"></div>
        {/* Lower Z-index for Background */}
        <div
          ref={textRef1}
          className="text-9xl font-bold text-white whitespace-nowrap z-40"
        >
          A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
        </div>
        <div ref={bgRef2} className="absolute inset-0 bg-black z-10"></div>
        {/* Lower z-index for Background */}
        <div
          ref={textRef2}
          className="text-9xl font-bold text-white whitespace-nowrap z-50"
        >
          Z Y X W V U T S R Q P O N M L K J I H G F E D C B A
        </div>
      </div>

      <div className="mt-[200vh]">
        {/* Image Row 1: Scroll Left to Right */}
        <div
          ref={imageRowRef1}
          className="flex overflow-hidden h-screen bg-gray-800"
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Random ${index}`}
              className="h-full mx-2"
            />
          ))}
        </div>

        {/* Image Row 2: Scroll Right to Left */}
        <div
          ref={imageRowRef2}
          className="flex overflow-hidden h-screen bg-gray-700"
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Random ${index}`}
              className="h-full mx-2"
            />
          ))}
        </div>

        {/* Image Row 1: Scroll Right to Left */}
        <div
          ref={imageRowRef1}
          className="flex overflow-hidden h-screen bg-gray-700"
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Random ${index}`}
              className="h-full mx-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollDemo;
