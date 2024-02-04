import React, { useEffect, useState } from "react";
import * as marked from "marked";

import { axiosInstance } from "@/service/config.js";
import "./index.scss";

const Main = () => {
  const [techData, setTechData] = useState([]);
  const [html, setHtml] = useState("");
  const saveData = async () => {
    const res = await axiosInstance.post("/tech/save", {
      title: "타이틀 테스트",
      content: html,
    });
    console.log(res);
  };

  const getData = async () => {
    const res = await axiosInstance.get("/tech");
    console.log(res);
    setTechData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const markdown = event.target.result;
        const html = marked.parse(markdown);
        setHtml(html);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="main-con">
      <div className="banner">
        <h2>hi</h2>
      </div>
      {html && <button onClick={saveData}>등록하기</button>}
      <div className="content">
        <h2>메인 페이지</h2>
        <input type="file" onChange={onFileChange} accept=".md" />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

export default Main;
