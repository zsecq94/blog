import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

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
      <div className="header-con">
        <div className="title-box">
          <Link to="/">
            <span className="bold">배중권</span>의기술블로그.
          </Link>
        </div>
        <nav>
          <ul className="link-box">
            <Link className={url === "/about" ? "active" : ""} to="/about">
              About
            </Link>
            <Link className={url === "/algo" ? "active" : ""} to="/algo">
              Algo Log
            </Link>
            <Link className={url === "/tech" ? "active" : ""} to="/tech">
              Tech Log
            </Link>
            <Link className={url === "/port" ? "active" : ""} to="port">
              Portfolio
            </Link>
          </ul>
          <div className="sub-box">
            <Link to="https://github.com/zsecq94">
              <img src="/src/assets/images/git.png" alt="" />
            </Link>
          </div>
        </nav>
        <div className="lottie-box">
          <Lottie
            animationData={animation}
            style={{ width: 200, height: 200 }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
