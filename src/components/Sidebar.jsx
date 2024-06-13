// src/components/Sidebar.js
import PropTypes from "prop-types";
// import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-[100vh] w-64 bg-white dark:bg-gray-800 text-white transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }  transition-transform duration-300 ease-in-out z-[99]`}
    >
      <div className="p-4">
        <button onClick={toggleSidebar} className="dark:text-white text-black">
          Close
        </button>
      </div>
      <nav className="mt-4 dark:text-white text-black">
        <ul>
          <li className="p-4 hover:bg-gray-200 dark:hover:bg-gray-700">Home</li>
          <li className="p-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            About
          </li>
          <li className="p-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            Services
          </li>
          <li className="p-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};
Sidebar.propTypes = {
  isOpen: PropTypes.boolean, // or another appropriate type
  toggleSidebar: PropTypes.boolean,
};

export default Sidebar;
