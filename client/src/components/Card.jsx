import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Card = ({ data }) => {
  const timestamp = data.date;
  const formatted = moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
  return (
    <Link to={`/detail/${data.id}`} className="card">
      <img src={`http://localhost:3000/${data.img}`} alt="" />
      <div className="text-box">
        <p className="title">
          <strong>{data.title}</strong>
        </p>
        <p className="sub">{data.content}</p>
        <span className="date">{formatted}</span>
      </div>
    </Link>
  );
};

export default Card;
