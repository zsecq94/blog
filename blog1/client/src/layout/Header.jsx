import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("body").className = theme;
  }, [theme]);

  return (
    <header>
      <article>
        <a className="logo" href="/">
          <b>DEV</b>
          <span>.LOG</span>
        </a>

        <ul className="gnb">
          <li>
            <Link
              className={location.pathname === "/tech" ? "active" : ""}
              to="/tech"
            >
              TECH
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/algo" ? "active" : ""}
              to="/algo"
            >
              ALGORITHM
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/port" ? "active" : ""}
              to="/port"
            >
              PORTGOLIO
            </Link>
          </li>

          <button onClick={changeTheme}>THEME</button>
        </ul>
      </article>
    </header>
  );
};

export default Header;
