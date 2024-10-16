import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AppUIBox, WebUIBox } from "./ShowcaseBox";
gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollPage = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".section");

      const enableHorizontalScroll = () => {
        if (window.innerWidth > 768) {
          // Desktop: Enable horizontal scroll
          gsap.set(sections, { scale: 0.8 });
          gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              pin: true,
              scrub: 2,
              pinSpacing: true, // Ensures pin spacing
              invalidateOnRefresh: true,
              snap: {
                snapTo: 1 / (sections.length - 1),
                duration: { min: 0.2, max: 0.6 },
                ease: "power1.inOut",
              },
              end: () => "+=2000",
              onUpdate: (self) => {
                sections.forEach((section, index) => {
                  const progress =
                    self.progress * (sections.length - 1) - index;
                  const scaleValue = 0.8 + (1 - Math.abs(progress)) * 0.2;
                  gsap.to(section, { scale: scaleValue, duration: 0.1 });
                });
              },
            },
          });
        } else {
          // Mobile: Reset any horizontal scroll properties
          gsap.killTweensOf(sections);
          gsap.set(sections, { clearProps: "all" });
        }
      };

      enableHorizontalScroll();
      window.addEventListener("resize", enableHorizontalScroll);

      return () => {
        window.removeEventListener("resize", enableHorizontalScroll);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      className="container flex flex-col md:flex-row h-auto md:h-screen w-[100vw] overflow-x-hidden"
      ref={containerRef}
    >
      <div className="section max-600:h-auto w-full flex justify-center items-center">
        <WebUIBox
          title={"Aigma PTE"}
          img={"/image/aigmapte-site.png"}
          boxPosition="right"
          link="https://www.aigmapte.com"
          description={
            "This portfolio project showcases the development of a comprehensive PTE English exam practice platform. Designed to assist students in preparing for the Pearson Test of English (PTE) exam, the platform offers a range of practice materials and mock tests."
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
              <img src="/image/sql.png" alt="SQL" className="w-8" />
            </div>
          }
        />
      </div>

      <div className="section max-600:h-auto  w-full flex justify-center items-center">
        <WebUIBox
          title={"Smart Eduglobe"}
          img={"/image/ismart-site.png"}
          boxPosition="left"
          link="https://smarteduglobe.com/"
          description={
            "SmartEduGlobe is a consultation and visa blog platform offering personalized consultation services. Specializing in support for students aiming to study abroad, the site also provides English preparation courses."
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

      <div className="section  max-600:h-auto w-full flex justify-center items-center">
        <WebUIBox
          title={"Promptopia"}
          img={"/image/promptopia.png"}
          boxPosition="right"
          link="https://promptopia-xi-flax.vercel.app/"
          description={
            "Promptopia is a dynamic website dedicated to creating and sharing ready-made prompts for platforms like ChatGPT, offering a wide variety of prompts tailored for productivity, creativity, and education."
          }
          programmingIcon={
            <div className="flex gap-5 items-center">
              <i
                className="fa-brands fa-react fa-2xl"
                style={{ color: "#74C0FC" }}
              ></i>
              <img src="/image/next-js.png" alt="Next.js" className="w-20" />
              <img src="/image/express.png" alt="Express.js" className="w-8" />
              <img src="/image/mongo.png" alt="MongoDB" className="w-8" />
            </div>
          }
        />
      </div>

      <div className="section  max-600:h-auto  w-full flex justify-center items-center">
        <WebUIBox
          title={"Three.js Site"}
          img={"/image/three-js-site.png"}
          boxPosition="left"
          link="https://threejs-ai-two.vercel.app/"
          description={
            "This platform, using the power of Three.js, allows users to customize and design their own shirts in real time."
          }
          programmingIcon={
            <div className="flex gap-5">
              <img
                src="/image/threejs-logo.png"
                alt="Three.js"
                className="w-12"
              />
              <i
                className="fa-brands fa-square-js fa-2xl"
                style={{ color: "#e8d92b" }}
              ></i>
            </div>
          }
        />
      </div>

      <div className="section  max-600:h-auto  w-full flex justify-center items-center">
        <AppUIBox
          title={"Aigma PTE Mobile (Android)"}
          img={"/image/aigma-mobile.png"}
          boxPosition="right"
          link="https://play.google.com/store/apps/details?id=com.aigmamobile"
          description={
            "Aigma PTE Mobile for Android is a preparation tool for the PTE exam, providing personalized resources to ensure you're ready to achieve your desired score."
          }
          programmingIcon={
            <div className="flex gap-5 items-center">
              <img
                src="/image/react-native.png"
                alt="React Native"
                className="w-12"
              />
              <img src="/image/ts.png" alt="TypeScript" className="w-12" />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default HorizontalScrollPage;
