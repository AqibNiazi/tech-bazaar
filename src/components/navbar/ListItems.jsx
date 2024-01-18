import React from "react";
import NavLink from "./NavLink";
import ControlledSwitch from "../MUI/Switch";
const ListItems = ({ items, darkMode, toggleDarkMode }) => {
  const links = [
    { to: "/", text: "Home" },
    { to: "/cart", text: "Cart" },
    { to: "/products", text: "Products" },
    // Add more objects for each link
  ];

  return (
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          text={link.text}
          darkMode={darkMode}
        />
      ))}

      {/* Additional items */}
      <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-color md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <ControlledSwitch checked={darkMode} onChange={toggleDarkMode} />
      </li>

      <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-color md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        CartItems : {items.length}
      </li>
    </ul>
  );
};

export default ListItems;
