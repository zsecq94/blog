import React from "react";
import "@/assets/scss/CategoryCard.scss";

const CategoryCard = ({ name, activeCategory, setActiveCategory }) => {
  const handleCategory = (category) => {
    if (category === activeCategory) {
      setActiveCategory("");
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
