import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import lottieJson from "@/assets/json/lottie/header-animate01";
import Lottie from "react-lottie-player";

const Header = () => {
  const location = useLocation();
  const isMobile = window.innerWidth < 769;

  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const handleSearchBox = () => {
    setSearchIsOpen(!searchIsOpen);
  };

  return (
    <header>
      <div className="con">
        <div className="logo-box">
          <Link to={"/"}>
            <strong>DEV</strong>.LOG
          </Link>
          <div className="lottie-box">
            <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ width: isMobile ? 50 : 60, height: isMobile ? 50 : 60 }}
            />
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
      <div className="search-box">
        <h2>hi</h2>
      </div>
    </header>
  );
};

export default Header;
