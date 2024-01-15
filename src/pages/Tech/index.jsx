import React, { useEffect, useState } from "react";
import "@/assets/scss/Tech.scss";
import data from "@/assets/json/techItem.json";
import CategoryCard from "../../components/CategoryCard";

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState("");
  useEffect(() => {
    console.log(activeCategory);
  }, [activeCategory]);

  return (
    <div className="tech-con">
      <div className="slider-con"></div>
      <div className="con">
        <div className="category-box">
          {data.list.map((name, idx) => (
            <CategoryCard
              name={name}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
