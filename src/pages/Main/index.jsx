import "@/assets/scss/main.scss";
import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="banner-con main">
      <div className="banner">
        <span>main.</span>
      </div>
      <div className="content-con">
        <div className="title-box">
          <span>최근 올라온 글</span>
        </div>
        <div className="card-con">
          <Link to={`/detail/${132}`} className="card">
            <img src="/src/assets/images/test/card_1.png" alt="" />
            <span className="title">Spring 공화국에서 Ktor 사용하기</span>
            <span className="sub">2024.1.17 | Tech Log</span>
          </Link>
          <div className="card">
            <img src="/src/assets/images/test/card_2.png" alt="" />
            <span className="title">카카오페이증권이 생각하는 DevOps문화와 Platform Engineering의 방향성</span>
            <span className="sub">2024.1.17 | Tech Log</span>
          </div>
          <div className="card">
            <img src="/src/assets/images/test/card_3.png" alt="" />
            <span className="title">카카오페이증권이 생각하는 DevOps문화와 Platform Engineering의 방향성</span>
            <span className="sub">2024.1.17 | Tech Log</span>
          </div>
        </div>
        <div className="card-con">
          <div className="card">
            <img src="/src/assets/images/bg/bg1.png" alt="" />
            <span className="title">카카오페이증권이 생각하는 DevOps문화와 Platform Engineering의 방향성</span>
            <span className="sub">2024.1.17 | Tech Log</span>
          </div>
          <div className="card">
            <img src="/src/assets/images/bg/bg2.png" alt="" />
            <span className="title">Spring 공화국에서 Ktor 사용하기</span>
            <span className="sub">2024.1.17 | Tech Log</span>
          </div>
          <div className="card">
            <img src="/src/assets/images/bg/bg3.png" alt="" />
            <span className="title">카카오페이증권이 생각하는 DevOps문화와 Platform Engineering의 방향성</span>
            <span className="sub">2024.1.17 | Tech Log</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
