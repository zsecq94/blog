import React from "react";
import "./index.scss";

import { Link } from "react-router-dom";
import Card from "../../components/Card";

const Main = () => {
  const datas = [
    {
      id: 0,
      title: "Spring 공화국에서 Ktor 사용하기",
      date: "2024. 1. 26",
      category: "Tech Log",
      img: "/src/assets/images/test/card_1.png",
    },
    {
      id: 1,
      title: " 카카오페이증권이 생각하는 DevOps문화와 Platform Engineering의 방향성",
      date: "2024. 1. 17",
      category: "Tech Log",
      img: "/src/assets/images/test/card_2.png",
    },
    {
      id: 2,
      title: "Spring 공화국에서 Ktor 사용하기",
      date: "2024. 1. 26",
      category: "Tech Log",
      img: "/src/assets/images/test/card_3.png",
    },
    {
      id: 3,
      title: " 카카오페이증권이 생각하는 DevOps문화와 Platform Engineering의 방향성",
      date: "2024. 1. 17",
      category: "Tech Log",
      img: "/src/assets/images/test/card_2.png",
    },
    {
      id: 4,
      title: "Spring 공화국에서 Ktor 사용하기",
      date: "2024. 1. 26",
      category: "Tech Log",
      img: "/src/assets/images/test/card_3.png",
    },
  ];

  return (
    <div className="main">
      <div className="banner">
        <span>main.</span>
      </div>
      <div className="content">
        <strong className="title">최근 올라온 글</strong>
        <div className="card-con">
          {datas.map((val, idx) => {
            return (
              <Link to={`/detail/${val.id}`} key={idx}>
                <Card val={val} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
