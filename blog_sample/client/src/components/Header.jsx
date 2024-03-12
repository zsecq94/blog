import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [scroll, setScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScroll = () => {
    let state = window.scrollY > 150 && window.scrollY > lastScrollY;

    setScroll(state ? true : false);
    setLastScrollY(window.scrollY);
  };

  return (
    <header className={scroll ? "up" : ""}>
      <article>
        <section className="logo">
          <Link to={"/"}>
            <p className={location.pathname === "/" ? "active" : ""}>
              <b>DEV</b>.LOG
            </p>
          </Link>
        </section>

        <section className="gnb active">
          <li>
            <Link
              className={location.pathname === "/tech" ? "active" : ""}
              to={"/tech"}
            >
              개발
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

          <li className="search">검색</li>
        </section>
      </article>
    </header>
  );
};

export default Header;
