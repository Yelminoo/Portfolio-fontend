// import { useCallback, useEffect } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import FormModalBox from "./components/FormModalBox";
import SkillCard from "./components/SkillCard";
import SkillParallax from "./components/SkillParallax";
import TypewriterIntroComponent from "./components/TypewriterIntroComponent";
import ShowcaseBox from "./components/ShowcaseBox";

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

  const navLists = ["Home", "About Me", "Service", "Contact"];

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

  return (
    <>
      <main className="main-content bg-teal-50 dark:bg-neutral-800">
        <header className="sticky top-0 z-30">
          <nav className="p-5 bg-slate-600/60 dark:bg-black/50 text-white flex justify-between px-10 shadow-lg backdrop-blur-sm">
            <div className="flex w-full justify-between">
              <div className="w-[10%]">account</div>
              <div className="w-[70%] ">
                <ul className="flex justify-center">
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
              <div className="w-[10%] justify-end">
                <button onClick={() => toggleDarkMode()}>
                  {!darkMode ? (
                    <i className="fa-regular fa-sun fa-xl"></i>
                  ) : (
                    <i className="fa-regular fa-moon fa-xl"></i>
                  )}
                </button>
              </div>
            </div>
          </nav>
        </header>
        <div className=" scroll-watcher "></div>
        <section
          className="w-full animate-wave-gradient"
          style={
            {
              // backgroundImage:
              //   "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(25,152,246,1) 72%)",
            }
          }
        >
          <div className="w-100 min-h-[90vh] overflow-x-clip ">
            <TypewriterIntroComponent />
          </div>
        </section>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#050712"
          d="M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,128C672,85,768,43,864,58.7C960,75,1056,149,1152,170.7C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>

      </svg> */}
        {/* <section className="relative min-h-screen">
        <div className="matrix-rain"></div>
      </section> */}

        <section
          className=""
          id="service"
          style={{
            // background:
            // "radial-gradient(circle, rgba(24,83,140,1) 32%, rgba(0,0,0,1) 100%)",
            // "radial-gradient(circle, rgba(61,158,247,1) 0%, rgba(61,158,247,1) 0%, rgba(149,202,250,1) 35%, rgba(254,254,254,1) 71%)",
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
          <SkillParallax />
        </section>
        <section>
          <div className="text-center p-10">
            <h3 className="text-4xl  dark:text-white text  montserrat decoration-slate-500 underline-offset-8">
              Project Showcase
            </h3>
            <p className="h-1 w-[5rem] bg-slate-800 inline-block dark:bg-white"></p>
          </div>
          <ShowcaseBox />
        </section>
      </main>
      <FormModalBox isOpen={isOpen} setIsOpen={setIsOpen} />
      <section className="glassmorphism floating-ui bg-white/5 rounded-lg p-5 border-2 border-gray-100">
        <button className="h-100 overflow-visible">
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
        <button onClick={() => setIsOpen(true)} className="hover:text-black">
          <i
            className="fa-solid fa-envelope fa-2xl "
            style={{
              color: "#278aff",
            }}
          ></i>
        </button>
      </section>
    </>
  );
}

export default App;
