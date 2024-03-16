import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <article>
        <p>
          <b>DEV</b>.LOG
        </p>
        <ul className="gnb">
          <li>
            <Link to={"/tech"}>TECH</Link>
          </li>
          <li>
            <Link to={"/algo"}>ALGOLITHM</Link>
          </li>
          <li>
            <Link to={"/port"}>PORTFOLIO</Link>
          </li>
        </ul>
      </article>
    </header>
  );
};

export default Header;
