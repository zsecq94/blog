import React from "react";
import { useParams } from "react-router-dom";
import "./index.scss";

const Detail = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h2>detail 페이지 입니다.</h2>
    </div>
  );
};

export default Detail;
