import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/service/config.js";

import "./index.scss";

const Main = () => {
  const [techData, setTechData] = useState([]);

  const getData = async () => {
    const res = await axiosInstance.get("/tech");
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
    <div className="con">
      <div className="main-con">
        <div className="title-box">
          <p>
            <strong>최근 등록 순</strong>
          </p>
          <p>전체보기</p>
        </div>
        <div className="card-con">
          <div className="card">
            <p className="title">제목</p>
          </div>
          <div className="card">
            <p className="title">제목</p>
          </div>
          <div className="card">
            <p className="title">제목</p>
          </div>
          <div className="card">
            <p className="title">제목</p>
          </div>
          <div className="card">
            <p className="title">제목</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
