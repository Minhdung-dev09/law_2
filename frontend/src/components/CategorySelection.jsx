import React from "react";

const CategorySelection = ({ activeCategory, onSelectCategory }) => {
  const category = ["Startups", "Security", "AI", "Tech"];
  return (
    <div className="px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-500 font-semibold">
      <button
        onClick={() => onSelectCategory(null)}
        className={`lg:ml-12 ${activeCategory ? "active-button" : ""}`}
      >
        All
      </button>
      {category.map((category) => (
        <button
          onClick={() => onSelectCategory(category)}
          className={`mr-2 space-x-20 ${
            activeCategory === category ? "active-button" : ""
          }`}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
