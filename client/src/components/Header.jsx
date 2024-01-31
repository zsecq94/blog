import React, { useState } from "react";
import { Link } from "react-router-dom";

import "@/assets/scss/common.scss";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectMenu, setSelectMenu] = useState("");
  const [menuSpan, setMenuSpan] = useState("메뉴");

  const handleMenu = () => {
    setMenuSpan(menuSpan === "메뉴" ? "닫기" : "메뉴");
    setOpenMenu(!openMenu);
  };

  const handleMenuStyle = (val) => {
    setSelectMenu(val);
    if (openMenu) {
      setOpenMenu(!openMenu);
    }
  };

  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className="header">
      <nav>
        <div className="title-box">
          <Link to={"/"}>
            <span>
              <strong>배중권</strong>의블로그.
            </span>
          </Link>
        </div>
        <ul className={openMenu ? "open-menu" : ""}>
          <Link
            className={selectMenu === "algo" ? "active" : ""}
            onClick={() => handleMenuStyle("algo")}
            to={"/algo"}
          >
            알고리즘
          </Link>
          <Link
            className={selectMenu === "tech" ? "active" : ""}
            onClick={() => handleMenuStyle("tech")}
            to={"/tech"}
          >
            기술
          </Link>
          <Link
            className={selectMenu === "port" ? "active" : ""}
            onClick={() => handleMenuStyle("port")}
            to={"/port"}
          >
            포트폴리오
          </Link>
        </ul>

        <div className={`search-box ${openSearch ? "open" : ""}`}>
          <input className={openSearch ? "open" : ""} type="text" />
          <span className="search-btn" onClick={() => handleSearch()}>
            검색하기
          </span>
        </div>

        <span className="menu" onClick={handleMenu}>
          {menuSpan}
        </span>
      </nav>
    </div>
  );
};

export default Header;
