import { Link, useLocation } from "react-router-dom";

const Header = ({ theme, setTheme }) => {
  const location = useLocation();

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
              PORTGOLIO
            </Link>
          </li>
        </ul>

        <button onClick={changeTheme}>{theme}</button>
      </article>
    </header>
  );
};

export default Header;
