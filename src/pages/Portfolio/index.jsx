import React, { useState } from "react";
import "@/assets/scss/port.scss";
import data from "@/assets/json/techItem.json";
import Category from "@/components/Category";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("전체보기");
  return (
    <div className="con port">
      <div className="banner">
        <span>portfolio.</span>
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
            {data.portList.map((name, idx) => (
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

export default Portfolio;
