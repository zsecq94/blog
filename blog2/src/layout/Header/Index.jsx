import { Link } from "react-router-dom";
import "./Index.scss";

const Header = () => {
  return (
    <div className="header-wrap">
      <header>
        <Link to={"/"}>로고</Link>
        <ul>
          <Link to={"/algo"}>알고리즘</Link>
          <Link to={"/dev"}>개발</Link>
          <Link to={"/component"}>컴포넌트</Link>
          <Link to={"/port"}>포트폴리오</Link>
        </ul>
      </header>
    </div>
  );
};

export default Header;
