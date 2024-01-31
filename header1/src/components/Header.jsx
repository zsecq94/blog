import React, { useState } from "react";
import { Link } from "react-router-dom";

import "@/assets/scss/common.scss";

const Header = () => {
  const [openSearchBox, setOpenSearchBox] = useState(false);
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
          <Link className={selectMenu === "algo" ? "active" : ""} onClick={() => handleMenuStyle("algo")} to={"/algo"}>
            알고리즘
          </Link>
          <Link className={selectMenu === "tech" ? "active" : ""} onClick={() => handleMenuStyle("tech")} to={"/tech"}>
            기술
          </Link>
          <Link className={selectMenu === "port" ? "active" : ""} onClick={() => handleMenuStyle("port")} to={"/port"}>
            포트폴리오
          </Link>
        </ul>
        <span className="search-btn" onClick={() => setOpenSearchBox(!openSearchBox)}>
          검색하기
        </span>
        <span className="menu" onClick={handleMenu}>
          {menuSpan}
        </span>
      </nav>
    </div>
  );
};

export default Header;
