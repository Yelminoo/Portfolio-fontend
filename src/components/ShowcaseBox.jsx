// import React from "react";

import { useState } from "react";
import ProjectModalBox from "./ProjectModalBox";

const WebUIBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="showcase-box min-w-[10rem] max-w-[20rem]  min-h-12 bg-slate-200 dark:bg-transparent border-2 border-black hover:border-green-500 shadow-lg rounded-lg">
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
            <img src="/image/blue_matrix.png" className="w-full " />
          </div>

          <div className="p-2 flex items-center gap-5">
            <i className="fa-solid fa-globe dark:text-white"></i>
            <a href="https://www.aigmapte.com">
              <p className="whitespace-nowrap text-ellipsis overflow-hidden underline dark:text-white">
                https://www.aigmapte.com
              </p>
            </a>
          </div>
        </div>
      </div>
      <ProjectModalBox isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

function ShowcaseBox() {
  return (
    <div className="p-2 flex gap-6 m-auto w-[80vw] flex-wrap justify-center ">
      <WebUIBox></WebUIBox>
      <WebUIBox></WebUIBox>
      <WebUIBox></WebUIBox>
      <WebUIBox></WebUIBox>
      <WebUIBox></WebUIBox>
      <WebUIBox></WebUIBox>
    </div>
  );
}

export default ShowcaseBox;
