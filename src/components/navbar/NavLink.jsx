import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, text, darkMode }) => {
  return (
    <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-color md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
      <Link
        to={to}
        aria-current="page"
      >
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
