import { Link } from "react-router-dom";

import Lottie from "react-lottie";
import animationData from "@/assets/json/lottie/header_animate";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const closeSearchBox = () => {
    setActiveSearch(false);
  };

  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <header>
      <div className="con">
        <div className="logo-box">
          <Link to={"/"}>
            <strong>DEV</strong>.LOG
          </Link>
          <div className="lottie-box">
            <Lottie options={lottieOptions} height={35} width={35} />
          </div>
        </div>
        <ul className="gnb-box">
          <Link
            className={location.pathname === "/tech" ? "active" : ""}
            to={"/tech"}
          >
            개발
          </Link>
          <Link
            className={location.pathname === "/debug" ? "active" : ""}
            to={"/debug"}
          >
            디버그
          </Link>
          <Link
            className={location.pathname === "/algo" ? "active" : ""}
            to={"/algo"}
          >
            알고리즘
          </Link>
          <Link
            className={location.pathname === "/component" ? "active" : ""}
            to={"/component"}
          >
            컴포넌트
          </Link>
          <Link
            className={location.pathname === "/port" ? "active" : ""}
            to={"/port"}
          >
            포트폴리오
          </Link>
          <img
            onClick={() => setActiveSearch(!activeSearch)}
            src="/src/assets/images/icons/ico_search.png"
            alt=""
          />
        </ul>
      </div>
      <div className={activeSearch ? "search-box active" : "search-box"}></div>
    </header>
  );
};

export default Header;
