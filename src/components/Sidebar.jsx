// components/Sidebar.js
import React from "react";

const Sidebar = ({
  categories,
  handleCategoryClick,
  isDropdownOpen,
  setIsDropdownOpen,
  darkMode,
}) => {
  return (
    <aside className="w-full lg:w-1/5 bg-gray-100 dark:bg-gray-800 p-4">
      <h2
        className={`text-xl font-bold font-mono mb-2 p-4 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        Categories
      </h2>

      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full px-4 py-2 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          {isDropdownOpen ? "Hide Categories" : "Show Categories"}
        </button>
      </div>

      <ul
        className={`text-md font-bold p-4 space-y-2 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        } ${isDropdownOpen ? "block" : "hidden"} lg:block`}
      >
        <li>
          <button onClick={() => handleCategoryClick("")}>All</button>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
