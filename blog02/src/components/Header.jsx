import { Link } from "react-router-dom";

import Lottie from "react-lottie";
import animationData from "@/assets/json/lottie/header_animate";
import { useState } from "react";

const Header = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [activeSearch, setActiveSearch] = useState(false);
  const [activeLng, setActiveLnb] = useState(false);

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
          <Link to={"/tech"}>기술</Link>
          <Link to={"/algo"}>알고리즘</Link>
          <Link to={"/port"}>포트폴리오</Link>
          <img onClick={() => setActiveSearch(!activeSearch)} src="/src/assets/images/icons/ico_search.png" alt="" />
        </ul>
      </div>
      <div className={activeSearch ? "search-box active" : "search-box"}></div>
    </header>
  );
};

export default Header;
