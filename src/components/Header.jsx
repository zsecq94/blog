import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "@/assets/json/headerAnimation.json";

const Header = () => {
  const location = useLocation();
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <header>
      <nav>
        <div className="title-box">
          <a href="/">
            <span className="bold">배중권</span>의기술블로그.
          </a>
        </div>
        <div className="link-box">
          <ul>
            <li>
              <a className={url === "/about" ? "active" : ""} href="/about">
                About
              </a>
            </li>
            <li>
              <a className={url === "/algo" ? "active" : ""} href="/algo">
                Algo Log
              </a>
            </li>
            <li>
              <a className={url === "/tech" ? "active" : ""} href="/tech">
                Tech Log
              </a>
            </li>
            <li>
              <a className={url === "/port" ? "active" : ""} href="/port">
                Portfolio
              </a>
            </li>
          </ul>
          <a href="https://github.com/zsecq94" target="_blank" rel="noreferrer">
            <img src="/src/assets/images/git.png" alt="" />
          </a>
          <div className="lottie-box">
            <Lottie animationData={animation} style={{ height: 200, width: 200 }} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
