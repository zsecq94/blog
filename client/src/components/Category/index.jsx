import React from "react";
import "./index.scss";

const CategoryCard = ({ name, activeCategory, setActiveCategory }) => {
  const handleCategory = (category) => {
    if (category === activeCategory) {
      setActiveCategory("전체보기");
    } else {
      setActiveCategory(category);
    }
  };
  return (
    <div
      className={
        activeCategory === name
          ? "category-card category-card-active"
          : "category-card"
      }
      onClick={() => handleCategory(name)}
    >
      <span>{name}</span>
    </div>
  );
};

export default CategoryCard;
