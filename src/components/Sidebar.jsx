// src/components/Sidebar.js
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// import React from "react";

const Sidebar = ({ isOpen, toggleSidebar, navLists }) => {
  const [containerVisible, setContainerVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setContainerVisible(true);
    } else {
      setTimeout(() => setContainerVisible(false), 500);
    }
  }, [isOpen]);
  return (
    <>
      <div
        className={`${
          containerVisible ? "" : "hidden"
        } fixed top-0 w-[100vw] h-[100vh] backdrop-blur-sm transition-shadow`}
      >
        <div
          className={`absolute top-0 right-0 h-[100vh] w-64 bg-white dark:bg-gray-800 text-white transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }  transition-transform duration-300 ease-in-out z-[99]`}
        >
          <div className="p-4">
            <button
              onClick={toggleSidebar}
              className="dark:text-white text-black"
            >
              Close
            </button>
          </div>
          <nav className="mt-4 dark:text-white text-black">
            <ul>
              {/* <li className="p-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            <a href="">Home</a>
          </li>
          <li className="p-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            <a href="">About Me</a>
          </li>
          <li className="p-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            <a href="">Services</a>
          </li>
          <li className="p-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            <a href="">Contact</a>
          </li> */}
              {navLists.map((n, index) => (
                <li key={index} className="my-5">
                  <a
                    href={"#" + n.toLowerCase()}
                    className="hover:font-bold mx-5  cursor-pointer font-opensans font-thin"
                  >
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
Sidebar.propTypes = {
  isOpen: PropTypes.bool, // or another appropriate type
  toggleSidebar: PropTypes.func,
  navLists: PropTypes.array,
};

export default Sidebar;
