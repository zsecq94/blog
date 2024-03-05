import { Link } from "react-router-dom";
import "./Index.scss";

const Header = () => {
  return (
    <header>
      <article>
        <section>
          <Link to={"/"} className="logo">
            <b>DEV.LOG</b>
          </Link>

          <ul className="gnb">
            <Link>개발</Link>
            <Link>포트폴리오</Link>
          </ul>
        </section>

        <section>
          <input type="text" />
        </section>
      </article>
    </header>
  );
};

export default Header;
