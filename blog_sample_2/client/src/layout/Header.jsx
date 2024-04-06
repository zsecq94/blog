import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

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
        </section>
      </article>
    </header>
  );
};

export default Header;
