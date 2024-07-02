import { useState, useEffect } from "react";
import "./TypewriterStyle.css";

// const SvgWithImageOverlay = () => {
//   return (
//     <div className="container relative mt-16 overflow-hidden scale-[2] md:scale-125">
//       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//         {/* Define the shadow filter */}
//         <defs>
//           <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
//             <feDropShadow
//               dx="2"
//               dy="2"
//               stdDeviation="4"
//               floodColor="#000000"
//               floodOpacity="0.4"
//             />
//           </filter>
//         </defs>

//         {/* Define the gradient */}
//         <defs>
//           <linearGradient id="gradient" x1="1%" y1="50%" x2="60%" y2="60%">
//             <stop offset="0%" stopColor="#fefefe" />
//             <stop offset="100%" stopColor="#0c0079" />
//           </linearGradient>
//           <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#d8d8de" />
//             <stop offset="100%" stopColor="#fcfcff" />
//           </linearGradient>
//         </defs>
//         <path
//           fill="url(#gradient-1)"
//           filter="url(#drop-shadow)"
//           d="M44.6,-14.6C52,8.1,48,34.4,32.9,45.4C17.8,56.5,-8.5,52.2,-28.4,38C-48.2,23.9,-61.6,-0.3,-55.8,-20.9C-50,-41.5,-25,-58.7,-3.2,-57.6C18.6,-56.6,37.3,-37.4,44.6,-14.6Z"
//           transform="translate(85 80)"
//         />

//         <path
//           fill="url(#gradient-1)"
//           filter="url(#drop-shadow)"
//           d="M55.2,-19.1C62.2,3.8,52.3,31.1,35,42.3C17.6,53.5,-7.1,48.7,-29.7,33.9C-52.4,19.1,-72.9,-5.6,-67.6,-26.2C-62.3,-46.7,-31.2,-63,-3.6,-61.8C24.1,-60.7,48.1,-42.1,55.2,-19.1Z"
//           transform="translate(100 85)"
//         />
//         <path
//           fill="url(#gradient)"
//           d="M55.2,-19.1C62.2,3.8,52.3,31.1,35,42.3C17.6,53.5,-7.1,48.7,-29.7,33.9C-52.4,19.1,-72.9,-5.6,-67.6,-26.2C-62.3,-46.7,-31.2,-63,-3.6,-61.8C24.1,-60.7,48.1,-42.1,55.2,-19.1Z"
//           transform="translate(100 85) scale(0.99)"
//         />
//         <defs>
//           <clipPath id="clip-path">
//             {/* Define the shape of the clipping path */}
//             <path
//               fill="#FF0066"
//               d="M55.2,-19.1C62.2,3.8,52.3,31.1,35,42.3C17.6,53.5,-7.1,48.7,-29.7,33.9C-52.4,19.1,-72.9,-5.6,-67.6,-26.2C-62.3,-46.7,-31.2,-63,-3.6,-61.8C24.1,-60.7,48.1,-42.1,55.2,-19.1Z"
//               transform="translate(100 85) scale(0.99)"
//             />
//           </clipPath>
//         </defs>
//         <image
//           href="/image/YMO photo-transparent.png"
//           clipPath="url(#clip-path)"
//           x="45"
//           y="15"
//           width="50%"
//           height="60%"
//           preserveAspectRatio="xMidYMin slice"
//           style={{ objectFit: "cover", objectPosition: "center top" }}
//         />
//       </svg>
//     </div>
//   );
// };

function TypewriterIntroComponent() {
  // const [text, setText] = useState("");
  const initialText =
    // "I'm a seasoned web developer dedicated to exceeding customer expectations through innovative solutions and exceptional service.";
    "With expertise in both frontend and backend development, I bring dynamic and robust web solutions to life. Whether it's crafting seamless user experiences or building powerful server-side applications, I leverage my skills in JavaScript and PHP to deliver exceptional results. Let's create something amazing together.";
  //const typingSpeed = 100; // Adjust typing speed here (in milliseconds)
  const deleteSpeed = 50; // Adjust typing speed here (in milliseconds)
  const [reachEnd, setReachEnd] = useState(false);
  const [deleteText, setDeletText] = useState(false);

  // useEffect(() => {
  //   let index = 0;

  //   const typingInterval = setInterval(() => {
  //     if (index <= initialText.length && !reachEnd) {
  //       let addedText = initialText[index];

  //       setText((prevText) => {
  //         return prevText + addedText;
  //       });
  //       index++;
  //       if (index === initialText.length) {
  //         setReachEnd(true), 5000;
  //       }
  //     } else {
  //       clearInterval(typingInterval);
  //     }
  //   }, typingSpeed);

  //   return () => clearInterval(typingInterval);
  // }, [reachEnd]); // Dependency on reachEnd to start typing

  useEffect(() => {
    if (reachEnd) {
      const pauseBeforeDelete = setInterval(() => {
        setDeletText(true);
      }, 10000);

      return () => clearInterval(pauseBeforeDelete);
    }
  }, [reachEnd]);

  useEffect(() => {
    if (deleteText) {
      let index = initialText.length;

      const deletingInterval = setInterval(() => {
        if (index >= 0 && deleteText) {
          // Adjust condition to include reachEnd
          //setText((prevText) => prevText.slice(0, -1));

          if (index === 0) {
            setReachEnd(false);
            setDeletText(false);
          }
          index--;
        } else {
          clearInterval(deletingInterval);
        }
      }, deleteSpeed);

      return () => clearInterval(deletingInterval);
    }
  }, [reachEnd, deleteText]); // Dependency on reachEnd to start deleting

  return (
    <div className="relative w-full h-full glassmorphism">
      {/* bg image */}

      {/* <div
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
      </div> */}
      <div className="glassmorphism w-full h-full">
        {/* <img
          src="/image/banner.jpg"
          className=" object-cover"
          alt="banner-img"
        /> */}
        <div className=" flex z-30 w-full pt-20  h-full items-center flex-col lg:flex-row flex-grow max-w-[100rem] m-auto">
          <div className="relative w-1/3 sm:w-1/2 md:w-1/3 min-w-[300px] h-full sm:h-auto flex lg:self-end">
            <img
              src="/image/YMO-photo-transparent.png"
              className=" object-cover"
              alt="banner-img"
            />
          </div>
          <div className="w-full p-2 h-full sm:w-4/6 md:w-3/5 typewriter-text flex justify-start items-center">
            <div>
              <h1 className="block md:text-5xl text-3xl font-extralight dark:dark-neon-text neon-text my-8">
                Hello I&apos;m <strong className="">Yel Min Oo</strong>
              </h1>
              <h2 className="w-full min-h-28 pb-20 md:text-3xl text-2xl font-montserrat dark:dark-neon-text  neon-text  leading-normal relative after:content-['|'] after:ml-0.5 after:text-red-500 after:animate-pulse">
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
