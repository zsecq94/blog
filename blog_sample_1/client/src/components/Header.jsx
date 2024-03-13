import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [scroll, setScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScroll = () => {
    if (!isMenuOpen) {
      let state = window.scrollY > 150 && window.scrollY > lastScrollY;
      setScroll(state ? true : false);
    }
    setLastScrollY(window.scrollY);
  };

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={isMenuOpen ? "active " : scroll ? "up" : ""}>
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
              DEV
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
        </section>

        <section className="menu" onClick={handleMenu}>
          <img src="/src/assets/images/icons/ico_menu.png" alt="" />
        </section>
      </article>
    </header>
  );
};

export default Header;
