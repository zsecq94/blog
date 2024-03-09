import { Link } from "react-router-dom";

const Header = () => {
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
            <Link to={"/tech"}>기술</Link>
          </li>
          <li>
            <Link to={"/port"}>포트폴리오</Link>
          </li>
        </section>
      </article>
    </header>
  );
};

export default Header;
