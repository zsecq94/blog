import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return (
    <header>
      <article>
        <section className="logo">
          <a href="/">
            <b>DEV</b>
            <span>.LOG</span>
          </a>
        </section>

        <section className="gnb">
          <ul>
            <li>
              <Link
                className={location.pathname === "/tech" ? "active" : ""}
                to={"/tech"}
              >
                TECH
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/algo" ? "active" : ""}
                to={"/algo"}
              >
                ALGORITHM
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/port" ? "active" : ""}
                to={"/port"}
              >
                PORTFOLIO
              </Link>
            </li>
          </ul>

          <div className="btn-box">
            <button className={theme} onClick={toggleTheme}></button>
            <p className="menu"></p>
          </div>
        </section>
      </article>
    </header>
  );
};

export default Header;
