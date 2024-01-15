import "@/assets/scss/Header.scss";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <div className="header-con">
      <div className="header-box">
        <div className="title-box">
          <a href="/">
            <span className="bold">배중권</span>의기술블로그.
          </a>
        </div>
        <div className="link-box">
          <ul>
            <li>
              <a className={url === "/about" ? "active" : ""} href="/about">
                배중권
              </a>
            </li>
            <li>
              <a className={url === "/algo" ? "active" : ""} href="/algo">
                알고리즘
              </a>
            </li>
            <li>
              <a className={url === "/tech" ? "active" : ""} href="/tech">
                기술
              </a>
            </li>
            <li>
              <a className={url === "/port" ? "active" : ""} href="/port">
                포트폴리오
              </a>
            </li>
          </ul>
          <a href="https://github.com/zsecq94" target="_blank" rel="noreferrer">
            <img src="/src/assets/images/git.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
