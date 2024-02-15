import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { axiosInstance } from "@/service/config.js";
import "./index.scss";
import Card from "../../components/Card";

const Main = () => {
  const [techData, setTechData] = useState([]);

  const getData = async () => {
    const res = await axiosInstance.get("/api/v1/board");
    console.log(res.data);
    if (res.data) {
      setTechData(res.data);
    } else {
      alert("데이터 없음");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main-con">
      <div className="title-box">
        <p>
          <strong>최근 등록 순</strong>
        </p>
        <Link to={"/search"}>전체보기</Link>
      </div>
      <div className="card-con">
        {techData.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Main;
