import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.body.classList.remove();
    document.body.classList.add(!toggle ? "dark" : "light");

    return () => {
      document.body.classList.remove("dark");
    };
  }, [toggle]);

  return (
    <header>
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

          <button
            className={toggle ? "active" : ""}
            onClick={() => setToggle(!toggle)}
          ></button>
        </ul>
      </article>
    </header>
  );
};

export default Header;
