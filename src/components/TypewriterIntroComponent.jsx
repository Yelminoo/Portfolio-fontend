import "./TypewriterStyle.css";

function TypewriterIntroComponent() {
  // const [text, setText] = useState("");
  const initialText =
    // "I'm a seasoned web developer dedicated to exceeding customer expectations through innovative solutions and exceptional service.";
    "With expertise in both frontend and backend development, I bring dynamic and robust web solutions to life. Let's create something amazing together.";
  //const typingSpeed = 100; // Adjust typing speed here (in milliseconds)

  return (
    <div className="relative w-full h-full glassmorphism">
      {/* bg image */}

      <div
        className="absolute top-0 left-0 w-full h-full overflow-y-clip glassmorphism"
        style={{
          background: "black",
        }}
      >
        <img
          src="/image/cool-blue-light.jpg"
          alt="code-bg"
          className="header-image glassmorphism w-full h-full object-cover"
        />
      </div>
      <div className="glassmorphism w-full h-full">
        <div className=" flex z-30 w-full pt-20  h-full items-center flex-col lg:flex-row flex-grow max-w-[100rem] m-auto">
          <div className="relative w-1/3 sm:w-1/2 md:w-1/3 min-w-[300px] h-full sm:h-auto flex lg:self-end">
            <img
              src="/image/YMO-photo-transparent.png"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          <div className="w-full p-2 h-full sm:w-4/6 md:w-3/5 typewriter-text flex justify-start items-center">
            <div>
              <h1 className="block md:text-5xl text-3xl font-extralight neon-text my-8">
                Hello I&apos;m <strong className="">Yel Min Oo</strong>
              </h1>
              <h2 className="w-full min-h-28 pb-20 md:text-3xl text-2xl font-montserrat  neon-text  leading-normal relative after:content-['|'] after:ml-0.5 after:text-red-500 after:animate-pulse">
                {initialText}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TypewriterIntroComponent;
