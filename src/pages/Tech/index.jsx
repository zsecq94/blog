import data from "@/assets/json/techItem.json";
import React, { useState } from "react";
import Category from "@/components/Category";
import "@/assets/scss/tech.scss";

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState("전체보기");

  return (
    <div className="con tech">
      <div className="banner">
        <span>tech.</span>
      </div>
      <div className="content-con">
        <div className="card-con">
          <h2>
            컨텐츠영역컨텐츠영역컨텐츠영역컨텐츠영역컨텐츠영역컨텐츠영역컨텐츠영역컨텐츠영역
          </h2>
        </div>

        <div className="category-con">
          <div className="category-box">
            <div className="title-box">
              <span>TAG</span>
            </div>
            {data.techList.map((name, idx) => (
              <Category
                name={name}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
