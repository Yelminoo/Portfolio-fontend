function AboutMe() {
  return (
    <>
      <div className="w-full backdrop-blur-sm flex flex-col md:flex-row gap-5 items-center py-20 px-20 md:px-32">
        <p className="text-xl dark:text-white text-gray-700 pe-10">
          My journey into web development began with a fascination for how
          websites are built and function. This curiosity led me to dive deep
          into learning HTML, CSS, and JavaScript, eventually expanding my
          expertise to include PHP, a powerful server-side scripting language.
          Over the years, I have developed a keen eye for detail and a deep
          understanding of web technologies, which I continuously strive to
          expand and refine.
        </p>
        <div className=" min-h-[300px] flex justify-center ">
          <div
            className="relative w-[10rem] md:w-[20rem] h-[22rem] rounded-full glassmorphism bg-gray-50 "
            style={{
              background:
                "linear-gradient(90deg, rgba(99,96,117,1) 0%, rgba(255,255,255,1) 70%)",
            }}
          >
            <div className="absolute h-full left-[10%] top-[0%] z-40 w-full rounded-full overflow-y-hidden glassmorphism bg-gray-50 border-2 border-gray-200">
              <img
                className="h-full w-full"
                src="/image/YMO-about-me1.png"
                style={{
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
            </div>

            {/* <div className="absolute h-full  left-[0%] top-[-20%] z-10 w-full rounded-full glassmorphism bg-gray-500 border-2 border-gray-200"></div> */}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-start py-20  px-20 md:px-32 gap-10">
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-medium dark:text-white">
            <span className="text-4xl ">&#x2192;</span> What I do
          </h3>
          <div className="min-h-[7rem]">
            <p className="text-lg dark:text-white">
              As a Full Stack Developer, I enjoy working on all aspects of web
              development.
              <br /> My skills include:
            </p>
          </div>

          <ul className="list-disc list-inside text-lg leading-10 dark:text-white">
            <li>
              <strong>Frontend Development: </strong>
              Crafting intuitive and responsive user interfaces using HTML, CSS,
              JavaScript, and modern frameworks like React and Vue.js.
            </li>
            <li>
              <strong>Backend Development: </strong>
              Building robust and scalable server-side applications using PHP
              and Node.js, along with databases such as MySQL and MongoDB.
            </li>
            <li>
              <strong>Full Stack Solutions: </strong>
              Integrating frontend and backend technologies to create seamless,
              end-to-end web applications that deliver a great user experience.
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-medium dark:text-white">
            <span className="text-4xl ">&#x2192;</span> Why Choose Me?
          </h3>
          <div className="md:min-h-[7rem]"></div>
          {/* <p className="text-xl">
            As a Full Stack Developer, I enjoy working on all aspects of web
            development.
            <br /> My skills include:
          </p> */}
          <ul className="list-disc list-inside text-lg leading-10 dark:text-white">
            <li>
              <strong>Technical Expertise: </strong> Proficient in a wide range
              of web technologies and frameworks.
            </li>
            <li>
              <strong>Backend Development: </strong> Building robust and
              scalable server-side applications using PHP and Node.js, along
              with databases such as MySQL and MongoDB.
            </li>
            <li>
              <strong>Full Stack Solutions: </strong> Integrating frontend and
              backend technologies to create seamless, end-to-end web
              applications that deliver a great user experience.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
