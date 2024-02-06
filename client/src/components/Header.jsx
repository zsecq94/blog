import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [openSearch, setOpenSearch] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [menuSpan, setMenuSpan] = useState("메뉴");

  const handleNav = () => {
    setOpenNav(!openNav);
    setMenuSpan(menuSpan === "메뉴" ? "닫기" : "메뉴");
    setOpenSearch(openSearch && !openSearch);
  };

  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };

  const menuCheck = () => {
    setOpenNav(openNav && !openNav);
  };

  return (
    <div className="header-con">
      <div className="header">
        <div className="title-box">
          <Link to={"/"} onClick={menuCheck}>
            <span>
              <strong>배중권</strong>의블로그.
            </span>
          </Link>
        </div>
        <span className="menu" onClick={handleNav}>
          {menuSpan}
        </span>
        <ul className="nav">
          <Link
            className={location.pathname === "/algo" ? "active" : ""}
            to={"/algo"}
          >
            알고리즘
          </Link>
          <Link
            className={location.pathname === "/tech" ? "active" : ""}
            to={"/tech"}
          >
            기술
          </Link>
          <Link
            className={location.pathname === "/port" ? "active" : ""}
            to={"/port"}
          >
            포트폴리오
          </Link>
        </ul>
        <div className={`search-box ${openSearch ? "open" : ""}`}>
          <input className={openSearch ? "open" : ""} type="text" />
          <span className="search-btn" onClick={() => handleSearch()}>
            검색하기
          </span>
        </div>
      </div>
      <ul className={`mb-nav ${openNav ? "down" : ""}`}>
        <Link
          className={location.pathname === "/algo" ? "active" : ""}
          to={"/algo"}
          onClick={handleNav}
        >
          알고리즘
        </Link>
        <Link
          className={location.pathname === "/tech" ? "active" : ""}
          to={"/tech"}
          onClick={handleNav}
        >
          기술
        </Link>
        <Link
          className={location.pathname === "/port" ? "active" : ""}
          to={"/port"}
          onClick={handleNav}
        >
          포트폴리오
        </Link>
      </ul>
    </div>
  );
};

export default Header;
