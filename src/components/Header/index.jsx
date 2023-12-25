import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-con">
      <div className="title-box">
        <span className="title bold">배중권</span>
        <span className="title">기술블로그.</span>
      </div>
      <div className="menu-box">
        <span className="menu">FE</span>
        <span className="menu">BE</span>
        <span className="menu">CS</span>
        <span className="menu">ALL</span>
      </div>
      <div className="theme-box">
        <span>DARK</span>
        <span>|</span>
        <span>LIGHT</span>
      </div>
    </div>
  );
};

export default Header;
