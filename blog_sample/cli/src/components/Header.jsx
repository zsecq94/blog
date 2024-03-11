import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [scroll, setScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleScroll = () => {
    let currentScrollY = window.scrollY;

    if (currentScrollY > 150 && currentScrollY > lastScrollY) {
      setScroll(true);
      setLastScrollY(currentScrollY);
    } else {
      setScroll(false);
      setLastScrollY(currentScrollY);
    }
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

        <section className="gnb">
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

          <li>
            <a
              href="https://github.com/zsecq94"
              target="_blank"
              className="github"
            >
              <img src="/src/assets/images/icons/github.png" alt="" />
            </a>
          </li>

          <li className="search">
            <img src="/src/assets/images/icons/ico_search.png" alt="" />
          </li>
        </section>
      </article>
    </header>
  );
};

export default Header;
