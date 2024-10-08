// import { useCallback, useEffect } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import FormModalBox from "./components/FormModalBox";
import SkillCard from "./components/SkillCard";
import SkillParallax from "./components/SkillParallax";
import TypewriterIntroComponent from "./components/TypewriterIntroComponent";
// import ShowcaseBox from "./components/ShowcaseBox";
import Sidebar from "./components/Sidebar";
import SocialButtonGroup from "./components/SocialButtonGroup";
import ContactForm from "./components/ContactForm";
import AboutMe from "./components/AboutMe";
import { Analytics } from "@vercel/analytics/react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ScrollSnapComponent from "./components/ScrollSnapComponent";
// import Demo from "./components/GsapTest";
import ScrollDemo from "./components/TextGsap";
gsap.registerPlugin(ScrollToPlugin);
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    // const navLinks = document.querySelectorAll("nav ul li a");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - sectionHeight / 3 &&
          window.scrollY < sectionTop + sectionHeight - sectionHeight / 3
        ) {
          current = section.getAttribute("id");
        }
      });

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.querySelector(".intro-banner");

      const section1End = section1.offsetTop + section1.offsetHeight;

      if (window.scrollY >= section1End) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLists = ["About Me", "Skill", "Projects", "Contact"];

  // useEffect(() => {
  //   const handleLinkClick = (event) => {
  //     console.log(event);
  //     event.preventDefault();
  //     const targetId = event.currentTarget.getAttribute("href").substring(1);
  //     const targetElement = document.getElementById(targetId);

  //     if (targetElement) {
  //       targetElement.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }
  //   };

  //   const links = document.querySelectorAll('a[href^="#"]');
  //   links.forEach((link) => {
  //     link.addEventListener("click", handleLinkClick);
  //   });

  //   return () => {
  //     links.forEach((link) => {
  //       link.removeEventListener("click", handleLinkClick);
  //     });
  //   };
  // }, []);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);

    gsap.to(window, {
      scrollTo: { y: targetSection.offsetTop, autoKill: false },
      duration: 1, // Adjust the duration to your preference
      ease: "power2.out", // You can change the easing function if needed
    });
  };

  return (
    <>
      <Analytics />
      <ScrollDemo />
      <main className="main-content bg-teal-50 dark:bg-neutral-800 ">
        <header className="fixed w-full top-5 z-30 ">
          <div className="relative overflow-clip rounded-full w-4/6 max-w-[100rem] m-auto">
            <nav className="m-auto w-full rounded-full bg-slate-600/60 dark:bg-black/50 text-white flex items-center justify-between border-double border-2 border-gray-500 shadow-lg backdrop-blur-sm ">
              <div className="flex w-full items-center justify-between  m-auto">
                <div className="sm:w-[20%] md:w-[10%]">
                  <img
                    src={
                      darkMode
                        ? "/image/ymo-logo-light.png"
                        : "/image/ymo-logo-dark.png"
                    }
                    className="w-[4rem] object-contain dark:bg-black bg-white border-gray-400/5 rounded-full shadow-lg"
                  />
                </div>

                <div className="w-[70%] hidden md:block">
                  <ul className="flex justify-center ">
                    {navLists.map((n, index) => (
                      <li key={index}>
                        <a
                          href={"#" + n.toLowerCase()}
                          onClick={(e) =>
                            handleScrollToSection(e, n.toLowerCase())
                          }
                          className=" hover:underline mx-5 underline-offset-8 cursor-pointer font-opensans font-bold"
                        >
                          {n}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-[10%] justify-end visible ">
                  <button onClick={() => toggleDarkMode()}>
                    {!darkMode ? (
                      <i className="fa-regular fa-sun fa-xl"></i>
                    ) : (
                      <i className="fa-regular fa-moon fa-xl"></i>
                    )}
                  </button>
                </div>
                <div className="relative sm:block md:hidden mr-4">
                  <button onClick={toggleSidebar} className="text-white">
                    <i className="fa-solid fa-bars "></i>
                  </button>
                </div>
              </div>
              <div className="scroll-watcher"></div>
            </nav>
          </div>
          <Sidebar
            isOpen={isSidebarOpen}
            navLists={navLists}
            toggleSidebar={toggleSidebar}
          />
        </header>

        <section
          className="w-full animate-wave-gradient bg-dark intro-banner"
          style={
            {
              // backgroundImage:
              //   "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(25,152,246,1) 72%)",
            }
          }
        >
          <div className="w-full  ">
            <TypewriterIntroComponent />

            {/* <img src="/image/banner.jpg" className="w-full header-image" /> */}
          </div>
        </section>
        <section
          id="about me"
          className="w-full animate-wave-gradient bg-dark intro-banner"
          style={
            {
              // backgroundImage:
              //   "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(25,152,246,1) 72%)",
            }
          }
        >
          <div className="text-center relative p-10 ">
            <h3 className="text-4xl text-black dark:text-white text  montserrat decoration-slate-500 underline-offset-8">
              About Me
            </h3>
            <p className="h-1 w-[5rem] bg-slate-800 inline-block dark:bg-white"></p>
          </div>
          <AboutMe />
        </section>

        {/* <div className="blob-container w-full">
          <div className="circle d1" style={{ animationDelay: "-14s" }}></div>
          <div className="circle d2" style={{ animationDelay: "-13s" }}></div>
          <div className="circle d3" style={{ animationDelay: "-12s" }}></div>
          <div className="circle d1" style={{ animationDelay: "-11s" }}></div>
          <div className="circle d2" style={{ animationDelay: "-10s" }}></div>
          <div className="circle d3" style={{ animationDelay: "-9s" }}></div>
          <div className="circle d1" style={{ animationDelay: "-8s" }}></div>
          <div className="circle d2" style={{ animationDelay: "-7s" }}></div>
          <div className="circle d3" style={{ animationDelay: "-6s" }}></div>
          <div className="circle d1" style={{ animationDelay: "-5s" }}></div>
          <div className="circle d2" style={{ animationDelay: "-4s" }}></div>
          <div className="circle d3" style={{ animationDelay: "-3s" }}></div>
          <div className="circle d1" style={{ animationDelay: "-2s" }}></div>
          <div className="circle d2" style={{ animationDelay: "-1s" }}></div>
          <div className="circle d3" style={{ animationDelay: "-0s" }}></div>
        </div> */}

        <section
          className="w-full"
          id="skill"
          style={{
            backdropFilter: darkMode ? "blur(5px)" : "blur(2px)",
          }}
        >
          <div className="text-center relative p-10 " style={{}}>
            <h3 className="text-4xl text-black dark:text-white text  montserrat decoration-slate-500 underline-offset-8">
              Programming Efficiency
            </h3>
            <p className="h-1 w-[5rem] bg-slate-800 inline-block dark:bg-white"></p>
          </div>
          <SkillCard></SkillCard>
        </section>
        <section
          className=""
          style={{
            backdropFilter: "blur(10px)",
          }}
        >
          <SkillParallax />{" "}
        </section>

        <section
          id="projects"
          className="p-5"
          style={{
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="text-center p-10">
            <h3 className="text-4xl  dark:text-white text  montserrat decoration-slate-500 underline-offset-8">
              Project Showcase
            </h3>
            <p className="h-1 w-[5rem] bg-slate-800 inline-block dark:bg-white"></p>
          </div>
        </section>
        <ScrollSnapComponent />
        <section
          className="w-full p-0 m-0 border-0"
          id="contact"
          style={{
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="text-center relative p-10 " style={{}}>
            <h3 className="text-4xl text-black dark:text-white text  montserrat decoration-slate-500 underline-offset-8">
              Contact
            </h3>

            <p className="h-1 w-[5rem] bg-slate-800 inline-block dark:bg-white"></p>
          </div>
          <div className="w-[80vw] max-w-[100rem] m-auto">
            <div className="flex gap-5 w-full flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <h4 className="text-3xl font-bold dark:text-white">
                  Looking for talented web developers to join your team?
                </h4>
                <p className=" text-xl my-10 dark:text-white">
                  Have a discussion with me{" "}
                  <span className="hidden md:inline">&#x2192;</span>
                  <span className="inline md:hidden">&#x2193;</span>
                </p>
              </div>

              <div className="w-full md:w-1/2">
                <ContactForm />
              </div>
            </div>

            <div className="py-20">
              <h6 className="text-2xl dark:text-white">You can find me on :</h6>
              <SocialButtonGroup />
            </div>
          </div>
        </section>
      </main>

      <p>scroll snap component</p>
      <FormModalBox isOpen={isOpen} setIsOpen={setIsOpen} />
      <section
        className={`glassmorphism floating-ui ${
          isVisible ? "visible" : "hidden"
        } bg-white/5 rounded-lg p-5 border-2 border-gray-400 transition-all duration-300 bottom-[1%] left-[50%] md:left-[4%] md:bottom-[50%]`}
      >
        <button className="h-100 overflow-visible hover:scale-125">
          <a
            href={`${process.env.PUBLIC_URL}/resume/Yel Min Oo's Resume.pdf`}
            target="_blank"
            className=""
          >
            <i
              className="fa-solid fa-file-pdf fa-2xl"
              style={{ color: "#FFD43B" }}
            ></i>
          </a>
        </button>
        {/* <button
          onClick={() => setIsOpen(true)}
          className="hover:text-black hover:scale-125"
        >
          <i
            className="fa-solid fa-envelope fa-2xl "
            style={{
              color: "#278aff",
            }}
          ></i>
        </button> */}
      </section>
      {/* <Demo /> */}

      <footer className="h-[4rem] p-5 bg-black ">
        <div className=" flex px-10 max-w-[100rem] justify-between items-center">
          <h6 className="text-sm md:text-lg text-white">Powered by YMO dev.</h6>
          <h6 className="text-sm md:text-lg  text-white">
            Copyright {new Date().getFullYear()} YMO dev.
          </h6>
        </div>
      </footer>
    </>
  );
}

export default App;
