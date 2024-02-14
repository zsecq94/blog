import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={`/detail/${data.id}`} className="card">
      <img src={data.src} alt="" />
      <div className="text-box">
        <p className="title">
          <strong>{data.title}</strong>
        </p>
        <p className="sub">{data.content}</p>
        <span className="date">{data.date}</span>
      </div>
    </Link>
  );
};

export default Card;
