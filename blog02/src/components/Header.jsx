import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import lottieJson from "@/assets/json/lottie/header-animate";
import Lottie from "react-lottie-player";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isMobile = window.innerWidth < 769;

  const [searchVal, setSearchVal] = useState("");
  const [searchBox, setSearchBox] = useState(false);
  const [mbMenuOpen, setMbMenuOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrollCheck, setScrollCheck] = useState(false);

  const handleSearchBox = () => {
    setSearchBox(!searchBox);
  };

  const onSearchBtn = (val) => {
    if (val.length > 1) {
      setSearchVal("");
      setSearchBox(false);
      setMbMenuOpen(false);
      navigate(`/search/${val}`);
    } else {
      alert("검색어를 2자 이상 입력해주세요.");
    }
  };

  const clickOutside = (event) => {
    if (
      !event.target.closest(".search-box") &&
      !event.target.closest(".ico_search")
    ) {
      setSearchBox(false);
    }
  };

  const checkScrollPosition = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
      setScrollCheck(true);
      setSearchBox(false);
      setMbMenuOpen(false);
    } else if (currentScroll < lastScroll) {
      setScrollCheck(false);
      setSearchBox(false);
      setMbMenuOpen(false);
    }

    setLastScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, [lastScroll]);

  useEffect(() => {
    window.addEventListener("click", clickOutside);
    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <header>
      <div className={scrollCheck ? "con down" : "con"}>
        <div className="logo-box">
          <Link to={"/"} onClick={() => setMbMenuOpen(false)}>
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
            className="ico_search"
            onClick={handleSearchBox}
            src="/src/assets/images/icons/ico_search.png"
            alt=""
          />
        </ul>

        <div className="menu-box">
          <img
            onClick={() => setMbMenuOpen(!mbMenuOpen)}
            src={
              mbMenuOpen
                ? "/src/assets/images/icons/ico_close.png"
                : "/src/assets/images/icons/ico_menu.png"
            }
            alt=""
          />
        </div>
      </div>
      <ul className={mbMenuOpen ? "mb-gnb active" : "mb-gnb"}>
        <div className="inp-box">
          <input
            value={searchVal}
            type="text"
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="검색어를 입력해주세요."
          />
          <button onClick={() => onSearchBtn(searchVal)}>검색</button>
        </div>
        <Link onClick={() => setMbMenuOpen(false)} to={"/tech"}>
          개발
        </Link>
        <Link onClick={() => setMbMenuOpen(false)} to={"/debug"}>
          디버그
        </Link>
        <Link onClick={() => setMbMenuOpen(false)} to={"/algo"}>
          알고리즘
        </Link>
        <Link onClick={() => setMbMenuOpen(false)} to={"/component"}>
          컴포넌트
        </Link>
        <Link onClick={() => setMbMenuOpen(false)} to={"/port"}>
          포트폴리오
        </Link>
      </ul>
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
            value={searchVal}
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
