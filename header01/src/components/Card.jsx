import React from "react";
import "/src/assets/scss/components.scss";

const Card = ({ val }) => {
  return (
    <div className="card-box">
      <img src={val.img} alt="" />
      <span className="title">{val.title}</span>
      <div className="sub-box">
        <span>{val.date}</span>
        <div className="line"></div>
        <span>{val.category}</span>
      </div>
    </div>
  );
};

export default Card;
