import { Link } from "react-router-dom";

import Lottie from "react-lottie";
import animationData from "@/assets/json/lottie/header_animate";
import { useState, useEffect, useRef } from "react";
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
  const searchBoxRef = useRef(null);

  const handleSearchBox = (event) => {
    console.log(searchBoxRef.current.contains(event.target));
    if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
      setActiveSearch(false);
    }
  };

  const goDetail = () => {
    setActiveSearch(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleSearchBox);
    return () => {
      document.removeEventListener("mousedown", handleSearchBox);
    };
  }, []);

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
          <img onClick={() => setActiveSearch(!activeSearch)} src="/src/assets/images/icons/ico_search.png" alt="" />
        </ul>
      </div>
      <div ref={searchBoxRef} className={activeSearch ? "search-box active" : "search-box"}>
        <div className="box">
          <p>#React</p>
          <p>#Vue</p>
          <p>#Node</p>
          <p>#백준</p>
          <p>#프로그래머스</p>
          <p>#버튼</p>
          <p>#디자인 패턴</p>
        </div>
        <div className="inp-box">
          <input className="inp" type="text" />
          <button
            onClick={() => {
              goDetail();
            }}
          >
            검색
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
