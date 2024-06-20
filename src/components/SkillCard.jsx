// import React from "react";
import PropTypes, { object } from "prop-types";

const SkilBox = ({
  gradientBg = "white",
  icon,
  text,

  progressValue = "45%",
}) => {
  return (
    <div
      className="skill-card glassmorphism rounded-lg"
      style={{
        minWidth: "250px",

        // background:
        //   "linear-gradient(320deg, rgba(143,200,252,1) 25%, rgba(242,244,246,1) 52%, rgba(251,250,250,1) 69%)",
        // "linear-gradient(320deg, rgba(24,36,47,1) 2%, rgba(252,252,252,1) 100%)",
        //"linear-gradient(320deg, rgba(143,200,252,1) 25%, rgba(242,244,246,1) 52%, rgba(251,250,250,1) 69%))",
        // boxShadow: "0px 0px 10px 1px grey",
      }}
    >
      <div
        className=" h-full border rounded-lg p-5 overflow-hidden  bg-slate-200 dark:bg-transparent border-black/5 shadow-md"
        style={{}}
      >
        <div className="font-Josefinsans font-bold flex justify-start items-center ">
          <div className="h-[30%] flex overflow-visible">
            <div> {icon}</div>

            <div className="ml-2 dark:text-white">
              <h2 className=""> {text}</h2>
            </div>
          </div>
        </div>
        <h5 className="text-black dark:text-white font-opensans font-bold text-right">
          {progressValue}
        </h5>
        <div
          className="w-full mt-4 dark:bg-gray-200 rounded-full h-2.5 mb-4 bg-gray-200 "
          style={{ boxShadow: " inset 0 2px 5px 0 rgb(0 0 0 / 0.5)" }}
        >
          <div
            className={`h-2.5 rounded-full dark:bg-gray-300 border-2 border-white`}
            style={{ width: progressValue, background: gradientBg }}
          ></div>
        </div>
      </div>
    </div>
  );
};
SkilBox.propTypes = {
  icon: PropTypes.elementType | object, // or another appropriate type
  gradientBg: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  progressColor: PropTypes.string,
  progressValue: PropTypes.string,
};

function SkillCard() {
  return (
    <div className="flex">
      <div className="flex gap-10 justify-center rounded-xl flex-wrap p-20 max-w-[100rem]  m-auto">
        <SkilBox
          gradientBg={
            "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, rgba(237,79,35,1) 88%)"
          }
          text={"HTML"}
          icon={
            <i
              className="fa-brands fa-html5 fa-2xl"
              style={{ color: "rgba(237,79,35,1)" }}
            />
          }
          progressColor={"#ed4f23"}
          progressValue="95%"
        />
        <SkilBox
          gradientBg={
            "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, rgba(58,212,252,1) 88%)"
          }
          text={"CSS"}
          icon={
            <i
              className="fa-brands fa-css3 fa-2xl"
              style={{ color: "rgba(58,212,252,1)" }}
            />
          }
          progressColor={"#2397ed"}
          progressValue="95%"
        />
        <SkilBox
          gradientBg={
            "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, rgba(252,250,1,1) 88%)"
          }
          text={"JS"}
          icon={
            <i
              className="fa-brands fa-square-js fa-2xl"
              style={{ color: "#e8d92b" }}
            />
          }
          progressColor={"#d4ed23"}
          progressValue="95%"
        />
        <SkilBox
          gradientBg={
            "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, rgba(35,53,237,1) 88%)"
          }
          text={"PHP"}
          icon={
            <i
              className="fa-brands fa-php fa-2xl"
              style={{ color: "#2335ed" }}
            />
          }
          progressColor={"#2335ed"}
          progressValue="80%"
        />
        <SkilBox
          gradientBg={
            "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, #74C0FC 88%)"
          }
          text={"React"}
          icon={
            <i
              className="fa-brands fa-react fa-2xl"
              style={{ color: "#74C0FC" }}
            ></i>
          }
          progressColor={"#74C0FC"}
          progressValue="95%"
        />
        <SkilBox
          gradientBg={
            "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, #34a9ff 88%)"
          }
          text={"React Native"}
          progressValue="95%"
          icon={
            <img src="/image/react-native.png" style={{ width: "2rem" }}></img>
          }
          progressColor={"#34a9ff"}
        />
        <SkilBox
          gradientBg={
            "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, #34a9ff 88%)"
          }
          text={"Typescript"}
          progressValue="60%"
          icon={<img src="/image/ts.png" style={{ width: "1.5rem" }}></img>}
          progressColor={"#34a9ff"}
        />

        <SkilBox
          gradientBg={
            "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, #0d1a30 88%)"
          }
          text={"Wordpress"}
          icon={
            <i
              className="fa-brands fa-wordpress fa-2xl"
              style={{ color: "#0d1a30" }}
            ></i>
          }
          progressColor={"#0d1a30"}
          progressValue="70%"
        />
        <SkilBox
          gradientBg={
            "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, #e41111 88%)"
          }
          text={"Laravel"}
          icon={
            <i
              className="fa-brands fa-laravel fa-2xl"
              style={{ color: "#e41111" }}
            ></i>
          }
          progressColor={"#e41111"}
          progressValue="95%"
        />
        <SkilBox
          gradientBg={
            "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, #74C0FC 88%)"
          }
          text={"Tailwind"}
          icon={<img src="/image/tailwind.png" style={{ width: "1.5rem" }}></img>}
          progressColor={"#74C0FC"}
          progressValue="90%"
        />
        <SkilBox
          gradientBg={
            "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, #4fe949 88%)"
          }
          text={"Node JS"}
          icon={<i className="fa-brands fa-node fa-2xl"></i>}
          progressColor={"#4fe949"}
          progressValue="70%"
        />
        <SkilBox
          gradientBg={
            "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, #692d9a 88%)"
          }
          text={"Bootstrap"}
          icon={
            <i
              className="fa-brands fa-bootstrap fa-2xl"
              style={{ color: "#692d9a" }}
            ></i>
          }
          progressColor={"#692d9a"}
          progressValue="95%"
        />
        <SkilBox
          gradientBg={
            "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, #464242 88%)"
          }
          text={"Express JS"}
          icon={<img src="/image/express.png" style={{ width: "2rem" }}></img>}
          progressColor={"#464242"}
          progressValue="70%"
        />

        <SkilBox
          gradientBg={
            "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, #34a9ff 88%)"
          }
          text={"Material Ui"}
          progressValue="95%"
          icon={
            <img src="/image/material-ui.png" style={{ width: "2rem" }}></img>
          }
          progressColor={"#34a9ff"}
        />

        <SkilBox
          gradientBg={
            "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, #c8d215 88%)"
          }
          text={"MySQL"}
          progressValue="95%"
          icon={<img src="/image/sql.png" style={{ width: "2rem" }}></img>}
          progressColor={"#c8d215"}
        />
        <SkilBox
          gradientBg={
            "linear-gradient(99deg, rgba(113,113,113,0.7) 45%, #19d91b 88%)"
          }
          text={"MongoDB"}
          progressValue="70%"
          icon={<img src="/image/mongo.png" style={{ width: "2rem" }}></img>}
          progressColor={"#19d91b"}
        />
      </div>
    </div>
  );
}

export default SkillCard;
