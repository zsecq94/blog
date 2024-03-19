import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [scrollCehck, setScrollCheck] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const handleScroll = () => {
    let currentScrollY = window.scrollY;
    if (currentScrollY > 150) {
      if (currentScrollY - lastScrollY > 50) {
        setScrollCheck(true);
        setLastScrollY(currentScrollY);
      } else if (lastScrollY - currentScrollY > 50) {
        setScrollCheck(false);
        setLastScrollY(currentScrollY);
      }
    } else {
      setScrollCheck(false);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header className={scrollCehck ? "up" : ""}>
      <article>
        <a href="/">
          <b>DEV</b>.LOG
        </a>

        <ul className="gnb">
          <li className={location.pathname === "/tech" ? "active" : ""}>
            <Link to={"/tech"}>TECH</Link>
          </li>

          <li className={location.pathname === "/algo" ? "active" : ""}>
            <Link to={"/algo"}>ALGORITHM</Link>
          </li>

          <li className={location.pathname === "/port" ? "active" : ""}>
            <Link to={"/port"}>PORTFOLIO</Link>
          </li>

          <div className="box">
            <button className={theme} onClick={toggleTheme}></button>

            <p></p>
          </div>
        </ul>
      </article>
    </header>
  );
};

export default Header;
