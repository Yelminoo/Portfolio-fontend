// import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import ProjectModalBox from "./ProjectModalBox";

const WebUIBox = ({
  title,
  description,
  boxPosition,
  img,
  link,
  programmingIcon,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex gap-20 items-center justify-center md:justify-normal flex-wrap md:flex-nowrap my-5 ">
        <div
          className={`showcase-box min-w-[320px]  w-2/4 min-h-12 bg-slate-200 dark:bg-transparent border-2 border-black hover:border-green-500 shadow-lg rounded-lg ${
            boxPosition === "right" ? "order-2" : ""
          }`}
        >
          <div className=" border rounded-lg  glassmorphism">
            <div className="p-2 flex gap-2 items-center justify-between ">
              <div className="flex gap-1">
                <i
                  className="fa-solid fa-circle"
                  style={{ color: "#d62424" }}
                ></i>
                <i
                  className="fa-solid fa-circle"
                  style={{ color: "#f5e20f" }}
                ></i>
                <i
                  className="fa-solid fa-circle"
                  style={{ color: "#00e658" }}
                ></i>
              </div>
              <div className="w-1/2 bg-white border rounded-md h-5"></div>
            </div>
            <div
              className="border rounded-lg m-2 overflow-hidden cursor-pointer"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              <img src={img} className="w-full " />
            </div>

            <div className="p-2 flex items-center gap-5">
              <i className="fa-solid fa-globe dark:text-white"></i>
              <a href={link}>
                <p className="whitespace-nowrap text-ellipsis overflow-hidden underline dark:text-white">
                  {link}
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="min-w-[320px] max-w-[600px]  w-1/2 h-auto">
          <div>
            <h3 className="text-3xl mb-5 dark:text-white font-bold">{title}</h3>
            <p className="text-lg dark:text-white text-gray-700 tracking-wider">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap my-5">
            <>{programmingIcon}</>
          </div>
        </div>
      </div>

      <ProjectModalBox isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const AppUIBox = ({
  title,
  description,
  boxPosition,
  img,
  link,
  programmingIcon,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex gap-20 justify-center  md:justify-normal flex-wrap md:flex-nowrap  items-center my-5 ">
        <div className="fancy bg-white-[10rem] h-[20rem]"></div>

        <div
          className={`w-2/4 ${boxPosition === "right" ? "order-2" : ""} flex`}
        >
          <div
            className={`showcase-box w-[10rem] h-[20rem] fancy m-auto border-[4px] p-2 shadow-lg rounded-xl border-black}`}
          >
            <div className="relative h-full w-full">
              <div className="absolute top-0 left-0  rounded-lg z-50  glassmorphism w-full h-full">
                <div className="h-[5%] w-full  flex justify-center items-center gap-2">
                  <div className="h-1/2 w-2/4 bg-black rounded-lg"></div>
                  <div className="h-[0.7rem] w-[0.7rem] bg-black rounded-full"></div>
                </div>
                <div
                  className="border rounded-lg border-1 border-gray-400 overflow-hidden cursor-pointer h-[85%] "
                  onClick={() => {
                    setIsOpen((prev) => !prev);
                  }}
                >
                  <div className="relative h-full border p-2 rounded-lg flex">
                    <img
                      src={img}
                      alt="Blurred Image"
                      className="absolute inset-0 w-full h-full object-cover object-fit-cover filter blur-lg "
                    />
                    <img
                      src={img}
                      alt="Content Image"
                      className="relative w-full h-full object-contain "
                    ></img>
                  </div>
                </div>
                <div className="h-[5%] m-2 flex justify-center items-center">
                  <a
                    href={link}
                    className="border-2 rounded-full bg-white w-[2rem] h-[2rem] border-double border-gray-600 flex shadow-lg"
                  >
                    <div className="w-1/3 h-1/3 rounded-sm border-black border-2 m-auto"></div>
                  </a>
                </div>
                {/* <div className="p-2 flex items-center gap-5">
                <i className="fa-solid fa-globe dark:text-white"></i>
                <a href={link}>
                  <p className="whitespace-nowrap text-ellipsis overflow-hidden underline dark:text-white">
                    {link}
                  </p>
                </a>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-[320px]  w-1/2 h-auto">
          <div>
            <h3 className="text-3xl mb-5 dark:text-white font-bold">{title}</h3>
            <p className="text-lg dark:text-white text-gray-700 tracking-wider">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap my-5">
            <>{programmingIcon}</>
          </div>
        </div>
      </div>

      <ProjectModalBox isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

function ShowcaseBox() {
  return (
    <div className="p-2 flex gap-6 m-auto w-[80vw] max-w-[100rem] flex-wrap justify-center ">
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
      <AppUIBox
        title={"Aigma PTE Mobile (Android)"}
        img={"/image/aigma-mobile.png"}
        boxPosition="right"
        link="https://promptopia-xi-flax.vercel.app/"
        description={
          "Aigma PTE Mobile for Android stands out as the ultimate preparation tool for the PTE exam. Its comprehensive features and personalized approach ensure that you are well-prepared to achieve your desired score. Whether you are a beginner or looking to improve your existing skills, Aigma PTE Mobile provides the resources and support you need to succeed. "
        }
        programmingIcon={
          <div className="flex gap-5 items-center">
            <img src="/image/react-native.png" style={{ width: "3rem" }}></img>
            <img src="/image/ts.png" style={{ width: "3rem" }}></img>
          </div>
        }
      />
    </div>
  );
}
WebUIBox.propTypes = {
  title: PropTypes.string, // or another appropriate type
  description: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
  boxPosition: PropTypes.oneOf(["right", "left"]).isRequired,
  programmingIcon: PropTypes.node.isRequired,
};

AppUIBox.propTypes = {
  title: PropTypes.string, // or another appropriate type
  description: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
  boxPosition: PropTypes.oneOf(["right", "left"]).isRequired,
  programmingIcon: PropTypes.node.isRequired,
};

export default ShowcaseBox;
