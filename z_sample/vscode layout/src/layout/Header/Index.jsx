import { Link } from "react-router-dom";
import "./Index.scss";

const Header = () => {
  return (
    <header>
      <ul className="gnb">
        <div className="circle-box">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        <Link to={"/"}>
          <strong>DEV</strong> BLOG.
        </Link>
      </ul>
      <div className="search-box">
        <input type="text" />
        <div className="img-box">
          <img src="/src/assets/images/icons/ico_search.png" alt="" />
          <span>검색</span>
        </div>
      </div>
      <div className="btn-box">
        <img src="/src/assets/images/icons/ico_user.png" alt="" />
      </div>
    </header>
  );
};

export default Header;
