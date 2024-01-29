import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import animation from "@/assets/json/headerAnimation.json";
import Lottie from "lottie-react";

const Header = () => {
  const location = useLocation();
  const [menuToggle, setMenuToggle] = useState(false);
  const [menuSpan, setMenuSpan] = useState("닫기");
  const [onScrollY, setOnScrollY] = useState(false);
  const isMobile = window.innerWidth < 769;

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  useEffect(() => {
    return menuSpan === "메뉴" ? setMenuSpan("닫기") : setMenuSpan("메뉴");
  }, [menuToggle]);

  const menuItems = [
    { path: "/about", name: "About" },
    { path: "/algo", name: "Algo Log" },
    { path: "/tech", name: "Tech Log" },
    { path: "/port", name: "Portfolio" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handleScroll = () => {
    if (isMobile) {
      if (window.scrollY > 100) {
        setOnScrollY(true);
      } else {
        setOnScrollY(false);
      }
    } else {
      if (window.scrollY > 200) {
        setOnScrollY(true);
      } else {
        setOnScrollY(false);
      }
    }
  };

  return (
    <header
      className={
        isMobile && (menuToggle || onScrollY)
          ? "active"
          : !isMobile && onScrollY
          ? "active2"
          : ""
      }
    >
      <nav>
        <Link onClick={() => menuToggle && setMenuToggle(!menuToggle)} to="/">
          <span>
            <strong>배중권</strong>의 기술블로그.
          </span>
        </Link>
        <ul className={menuToggle ? "active" : ""}>
          {menuItems.map(({ path, name }) => (
            <Link
              key={path}
              onClick={toggleMenu}
              className={location.pathname === path ? "menu active" : "menu"}
              to={path}
            >
              {name}
            </Link>
          ))}
          <div className="sub-box">
            <Link to="https://github.com/zsecq94" target="_blank">
              <img src="/src/assets/images/git.png" alt="git" />
            </Link>
            <div className="lottie-box">
              <Lottie
                animationData={animation}
                style={{ width: 200, height: 200 }}
              />
            </div>
          </div>
        </ul>

        <div className="menu-btn">
          <span onClick={toggleMenu}>{menuSpan}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
