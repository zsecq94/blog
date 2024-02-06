import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/service/config.js";

import "./index.scss";

const Main = () => {
  const [techData, setTechData] = useState([]);

  const getData = async () => {
    const res = await axiosInstance.get("/tech");
    console.log(res.data);
    setTechData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="con">
      <div className="title-box">
        <p>
          <strong>최근 등록 순</strong>
        </p>
      </div>
    </div>
  );
};

export default Main;
