import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <article>
        <section className="logo">
          <Link to={"/"}>
            <p>
              <b>DEV</b>.LOG
            </p>
          </Link>
        </section>

        <section className="gnb">
          <li>
            <Link
              className={location.pathname === "/tech" ? "active" : ""}
              to={"/tech"}
            >
              기술
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/port" ? "active" : ""}
              to={"/port"}
            >
              포트폴리오
            </Link>
          </li>
        </section>
      </article>
    </header>
  );
};

export default Header;
