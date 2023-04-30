import React from "react";
import { categories } from "../utils/constants";



const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-row md:flex-col overflow-y-auto h-auto md:h-[95%] gap-4 md:gap-6 scrollbar-hide mx-4 md:mx-0 md:py-6">
      {categories.map((category) => (
        <button
        onClick={() => setSelectedCategory(category.name)}
          className={`${
            category.name === selectedCategory && "bg-[#FC1503]"
          } flex justify-start items-center text-white rounded-full px-3 py-3 hover:bg-[#FC1503] group md:mx-4`}
          key={category.name}
        >
          <span
            className={`${
              category.name === selectedCategory ? "text-white" : "text-red-700"
            } mr-[10px] group-hover:text-white`}
          >
            {<category.icon size={20} />}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
