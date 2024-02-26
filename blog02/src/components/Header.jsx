import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import lottieJson from "@/assets/json/lottie/header-animate";
import Lottie from "react-lottie-player";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchVal, setSearchVal] = useState("");
  const [searchBox, setSearchBox] = useState(false);

  const handleSearchBox = () => {
    setSearchBox(!searchBox);
  };

  const onSearchBtn = (val) => {
    if (val.length > 1) {
      setSearchVal("");
      setSearchBox(false);
      navigate(`/search/${val}`);
    } else {
      alert("검색어를 2자 이상 입력해주세요.");
    }
  };

  const clickOutside = (event) => {
    if (!event.target.closest(".search-box") && !event.target.closest(".ico_search")) {
      setSearchBox(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", clickOutside);
    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <header>
      <div className="con">
        <div className="logo-box">
          <Link to={"/"}>
            <strong>DEV</strong>.LOG
          </Link>
          <div className="lottie-box">
            <Lottie loop animationData={lottieJson} play style={{ width: 60, height: 60 }} />
          </div>
        </div>
        <ul className="gnb-box">
          <Link className={location.pathname === "/tech" ? "active" : ""} to={"/tech"}>
            개발
          </Link>
          <Link className={location.pathname === "/debug" ? "active" : ""} to={"/debug"}>
            디버그
          </Link>
          <Link className={location.pathname === "/algo" ? "active" : ""} to={"/algo"}>
            알고리즘
          </Link>
          <Link className={location.pathname === "/component" ? "active" : ""} to={"/component"}>
            컴포넌트
          </Link>
          <Link className={location.pathname === "/port" ? "active" : ""} to={"/port"}>
            포트폴리오
          </Link>
          <img className="ico_search" onClick={handleSearchBox} src="/src/assets/images/icons/ico_search.png" alt="" />
        </ul>
      </div>
      <div className={searchBox ? "search-box active" : "search-box"}>
        <div className="category-box">
          <span onClick={() => onSearchBtn("React")}>#React</span>
          <span onClick={() => onSearchBtn("Vue")}>#Vue</span>
          <span onClick={() => onSearchBtn("Nods.js")}>#Nods.js</span>
          <span onClick={() => onSearchBtn("백준")}>#백준</span>
          <span onClick={() => onSearchBtn("프로그래머스")}>#프로그래머스</span>
          <span onClick={() => onSearchBtn("버튼")}>#버튼</span>
          <span onClick={() => onSearchBtn("알고리즘")}>#알고리즘</span>
        </div>
        <div className="inp-box">
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearchBtn(searchVal);
              }
            }}
            onChange={(e) => setSearchVal(e.target.value)}
            type="text"
            placeholder="검색어를 입력해주세요."
          />
          <button onClick={() => onSearchBtn(searchVal)}>검색</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
