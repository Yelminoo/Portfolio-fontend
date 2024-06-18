// import { useCallback, useEffect } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import FormModalBox from "./components/FormModalBox";
import SkillCard from "./components/SkillCard";
import SkillParallax from "./components/SkillParallax";
import TypewriterIntroComponent from "./components/TypewriterIntroComponent";
import ShowcaseBox from "./components/ShowcaseBox";
import Sidebar from "./components/Sidebar";
import SocialButtonGroup from "./components/SocialButtonGroup";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // const createRaindrop = useCallback(() => {
  //   const dropContainer = document.createElement("rain-div");
  //   dropContainer.classList.add("drop-container");
  //   dropContainer.style.left = `${Math.random() * 100}%`;
  //   document.querySelector(".matrix-rain").appendChild(dropContainer);

  //   const columnCount = Math.floor(Math.random() * 3) + 5; // Random number of columns between 5 and 7

  //   for (let i = 0; i < columnCount; i++) {
  //     const column = document.createElement("div");
  //     column.classList.add("column");
  //     dropContainer.appendChild(column);

  //     const rowCount = Math.floor(Math.random() * 10) + 5; // Random number of rows between 5 and 14
  //     const characters = generateRandomJapaneseCharacters(rowCount);

  //     for (let j = 0; j < rowCount; j++) {
  //       const drop = document.createElement("span");
  //       drop.classList.add("drop");
  //       drop.innerText = characters[j];
  //       drop.style.animationDelay = `${Math.random() * 5}s`; // Random animation delay
  //       column.appendChild(drop);
  //     }
  //   }

  //   // Add event listener for animation end
  //   // dropContainer.addEventListener("animationend", () => {
  //   //   // Remove the raindrop element from the DOM
  //   //   // dropContainer.style.opacity = 0;
  //   //   // setTimeout(() => {
  //   //   //   dropContainer.remove();
  //   //   // }, 1000);
  //   // });
  // }, []);

  // const createRaindrops = useCallback(() => {
  //   const dropCount = 30;

  //   for (let i = 0; i < dropCount; i++) {
  //     setTimeout(createRaindrop, Math.random() * 5000); // Delay the creation of each raindrop
  //   }
  // }, [createRaindrop]);

  // function generateRandomJapaneseCharacters(count) {
  //   const characters =
  //     "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
  //   const randomCharacters = [];
  //   for (let i = 0; i < count; i++) {
  //     const randomIndex = Math.floor(Math.random() * characters.length);
  //     randomCharacters.push(characters.charAt(randomIndex));
  //   }
  //   return randomCharacters;
  // }
  // useEffect(() => {
  //   let raindropInterval = setInterval(() => {
  //     createRaindrops();
  //   }, 2000);
  //   return () => clearInterval(raindropInterval);
  // }, [createRaindrops]);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("nav ul li a");

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
          alert("current :" + current);
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

  console.log(activeSection);
  console.log("active section");

  const navLists = ["About Me", "Skill", "Projects", "Contact"];

  useEffect(() => {
    const handleLinkClick = (event) => {
      console.log(event);
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <main className="main-content bg-teal-50 dark:bg-neutral-800 ">
        <header className="fixed w-full top-5 z-30 ">
          <div className="relative overflow-clip rounded-full w-4/6 max-w-[100rem] m-auto">
            <nav className="m-auto rounded-full bg-slate-600/60 dark:bg-black/50 text-white flex items-center justify-between border-double border-2 border-gray-500 shadow-lg backdrop-blur-sm ">
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
                  <Sidebar
                    isOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                  />
                </div>
              </div>
              <div className="scroll-watcher"></div>
            </nav>
          </div>
        </header>

        <section
          className="w-full animate-wave-gradient bg-dark"
          style={
            {
              // backgroundImage:
              //   "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(25,152,246,1) 72%)",
            }
          }
        >
          <div className="w-100 h-auto overflow-x-clip">
            {/* <TypewriterIntroComponent />
             */}
            <img src="/image/banner.jpg" className="w-full header-image" />
          </div>
        </section>

        <section
          className=""
          id="skill"
          style={{
            backdropFilter: "blur(2px)",
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
        <section className="">
          {" "}
          <SkillParallax />{" "}
        </section>
        <section id="projects">
          <div className="text-center p-10">
            <h3 className="text-4xl  dark:text-white text  montserrat decoration-slate-500 underline-offset-8">
              Project Showcase
            </h3>
            <p className="h-1 w-[5rem] bg-slate-800 inline-block dark:bg-white"></p>
          </div>
          <ShowcaseBox />
        </section>
        <section
          className=" max-w-[100rem]"
          id="contact"
          style={{
            backdropFilter: "blur(2px)",
          }}
        >
          <div className="text-center relative p-10 " style={{}}>
            <h3 className="text-4xl text-black dark:text-white text  montserrat decoration-slate-500 underline-offset-8">
              Contact
            </h3>

            <p className="h-1 w-[5rem] bg-slate-800 inline-block dark:bg-white"></p>
          </div>
          <div className="w-[80vw]  m-auto">
            <div className="">
              <h4 className="text-3xl font-bold dark:text-white">
                Looking for talented web developers to join your team?
              </h4>
            </div>

            <div className="pb-10">
              <h6 className="text-2xl dark:text-white">You can find me on :</h6>
              <SocialButtonGroup />
            </div>
          </div>
        </section>
      </main>

      <FormModalBox isOpen={isOpen} setIsOpen={setIsOpen} />
      <section className="glassmorphism floating-ui bg-white/5 rounded-lg p-5 border-2 border-gray-400">
        <button className="h-100 overflow-visible hover:scale-125">
          <a
            href={`${process.env.PUBLIC_URL}/resume/Yel Min Oo's Resume2.pdf`}
            target="_blank"
          >
            <i
              className="fa-solid fa-file-pdf fa-2xl"
              style={{ color: "#FFD43B" }}
            ></i>
          </a>
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="hover:text-black hover:scale-125"
        >
          <i
            className="fa-solid fa-envelope fa-2xl "
            style={{
              color: "#278aff",
            }}
          ></i>
        </button>
      </section>
      <footer className="h-[4rem] flex bg-black justify-between items-center">
        <h6 className="text-lg  text-white">Powered by YMO dev.</h6>
        <h6 className="text-lg  text-white">
          Copyright {new Date().getFullYear()} YMO dev.
        </h6>
      </footer>
    </>
  );
}

export default App;
