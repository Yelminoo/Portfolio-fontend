// src/HorizontalScrollPage.js
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";
import "./ScrollSnapStyle.css";
import { AppUIBox, WebUIBox } from "./ShowcaseBox";
gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollPage = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".section");
      gsap.set(sections, { scale: 0.8 });
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 2, // Slower scroll (increased scrub value)
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.2, max: 0.6 }, // Adjust snap duration
            ease: "power1.inOut",
          },
          end: () => "+=2000", // Extended scroll end for slower effect
          onUpdate: (self) => {
            sections.forEach((section, index) => {
              const progress = self.progress * (sections.length - 1) - index;
              const scaleValue = 0.8 + (1 - Math.abs(progress)) * 0.2;
              gsap.to(section, { scale: scaleValue, duration: 0.1 });
            });
          },
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="container" ref={containerRef}>
      <div className="section">
        <WebUIBox
          title={"Aigma PTE"}
          img={"/image/aigmapte-site.png"}
          boxPosition="right"
          link="https://www.aigmapte.com"
          description={
            " This portfolio project showcases the development of a comprehensive PTE English exam practice platform. Designed to assist students in preparing for the Pearson Test of English (PTE) exam, the platform offers a range of practice materials and mock tests ."
          }
          programmingIcon={
            <div className="flex gap-5 items-center">
              <i
                className="fa-brands fa-react fa-2xl"
                style={{ color: "#74C0FC" }}
              ></i>
              <i
                className="fa-brands fa-php fa-2xl"
                style={{ color: "#2335ed" }}
              />
              <i
                className="fa-brands fa-laravel fa-2xl"
                style={{ color: "#e41111" }}
              ></i>
              <img src="/image/sql.png" style={{ width: "2rem" }}></img>
            </div>
          }
        />
      </div>
      <div className="section">
        <WebUIBox
          title={"Smart Eduglobe"}
          img={"/image/ismart-site.png"}
          boxPosition="left"
          link="https://smarteduglobe.com/"
          description={
            " SmartEduGlobe is primarily a consultation and visa blog platform that also offers booking for personalized consultation services. Specializing in providing expert advice and support for students aiming to further their education globally, SmartEduGlobe covers crucial aspects of the study abroad process, including visa applications and educational planning. Additionally, the site features comprehensive English preparation courses for exams such as IELTS, PTE, and TOEFL."
          }
          programmingIcon={
            <div className="flex gap-5">
              <i
                className="fa-brands fa-php fa-2xl"
                style={{ color: "#2335ed" }}
              />
              <i
                className="fa-brands fa-wordpress fa-2xl"
                style={{ color: "#0d1a30" }}
              ></i>
            </div>
          }
        />
      </div>
      <div className="section">
        <WebUIBox
          title={"Promptopia"}
          img={"/image/promptopia.png"}
          boxPosition="right"
          link="https://promptopia-xi-flax.vercel.app/"
          description={
            "Promptopia is a dynamic website dedicated to creating and sharing ready-made prompts for use on platforms like ChatGPT. It offers a diverse collection of expertly crafted prompts designed to inspire creativity, enhance productivity, and facilitate engaging interactions. Whether you're looking for prompts for writing, brainstorming, education, or casual conversation, Promptopia provides a user-friendly space to explore, share, and utilize a wide variety of prompts tailored to meet your needs. "
          }
          programmingIcon={
            <div className="flex gap-5 items-center">
              <i
                className="fa-brands fa-react fa-2xl"
                style={{ color: "#74C0FC" }}
              ></i>

              <img src="/image/next-js.png" style={{ width: "5rem" }}></img>
              <img src="/image/express.png" style={{ width: "2rem" }}></img>
              <img src="/image/mongo.png" style={{ width: "2rem" }}></img>
            </div>
          }
        />
      </div>
      <div className="section">
        <WebUIBox
          title={"Three js Site"}
          img={"/image/three-js-site.png"}
          boxPosition="left"
          link="https://threejs-ai-two.vercel.app/"
          description={
            "Using the power of Three.js, we bring you a unique platform where you can customize and design your very own shirts in real time"
          }
          programmingIcon={
            <div className="flex gap-5">
              <img
                src="/image/threejs-logo.png"
                style={{ width: "3rem" }}
              ></img>
              <i
                className="fa-brands fa-square-js fa-2xl"
                style={{ color: "#e8d92b", marginTop: "1rem" }}
              />
            </div>
          }
        />
      </div>
      <div className="section">
        <AppUIBox
          title={"Aigma PTE Mobile (Android)"}
          img={"/image/aigma-mobile.png"}
          boxPosition="right"
          link="https://play.google.com/store/apps/details?id=com.aigmamobile"
          description={
            "Aigma PTE Mobile for Android stands out as the ultimate preparation tool for the PTE exam. Its comprehensive features and personalized approach ensure that you are well-prepared to achieve your desired score. Whether you are a beginner or looking to improve your existing skills, Aigma PTE Mobile provides the resources and support you need to succeed. "
          }
          programmingIcon={
            <div className="flex gap-5 items-center">
              <img
                src="/image/react-native.png"
                style={{ width: "3rem" }}
              ></img>
              <img src="/image/ts.png" style={{ width: "3rem" }}></img>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default HorizontalScrollPage;
