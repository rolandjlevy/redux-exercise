import React from "react";
import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";

function CategorySelector({category, setCategory}) {
  const categories = [
    "people",
    "vehicles",
    "planets",
    "films",
    "species",
    "starships"
  ];

  return (
    <Dropdown
      options={categories}
      onChange={setCategory}
      value={category}
      placeholder="Select a category"
    />
  );
}

export default CategorySelector;
