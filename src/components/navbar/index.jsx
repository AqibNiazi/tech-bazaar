import React,{useState} from "react";
import redux_icon from "../../assets/redux-icon.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


import ListItems from "./ListItems";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const items = useSelector((state) => state.cart);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can implement logic here to toggle your dark mode styles
    // For Tailwind CSS, you may conditionally apply the 'dark' class to your elements
    // Example: document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle("dark", darkMode);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="https://redux-toolkit.js.org/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={redux_icon} className="h-8" alt="Redux Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-color dark:text-white">
            Redux-Toolkit
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ListItems
            items={items}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
