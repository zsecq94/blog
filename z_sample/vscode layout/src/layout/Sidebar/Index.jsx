import { useState } from "react";
import "./Index.scss";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  return (
    <div className="side-con">
      <div className="menu-box"></div>
      <div className="folder-box">
        <ul>
          <li
            className={activeMenu === "node_modules" ? "active" : ""}
            onClick={() => handleMenuClick("node_modules")}
          >
            <img src="" alt="" />
            <p>node_modules</p>
          </li>
          <li
            className={activeMenu === "src" ? "active" : ""}
            onClick={() => handleMenuClick("src")}
          >
            <img src="" alt="" />
            <p>src</p>
          </li>
          <li
            className={activeMenu === "components" ? "active" : ""}
            onClick={() => handleMenuClick("components")}
          >
            <img src="" alt="" />
            <p>components</p>
          </li>
          <li
            className={activeMenu === "admin" ? "active" : ""}
            onClick={() => handleMenuClick("admin")}
          >
            <img src="" alt="" />
            <p>admin</p>
          </li>
          <li
            className={activeMenu === "algorithm" ? "active" : ""}
            onClick={() => handleMenuClick("algorithm")}
          >
            <img src="" alt="" />
            <p>algorithm</p>
            <ul>
              <li
                className={activeMenu === "baekjoon" ? "active" : ""}
                onClick={() => handleMenuClick("baekjoon")}
              >
                <img src="" alt="" />
                <p>baekjoon</p>
              </li>
              <li
                className={activeMenu === "programmers" ? "active" : ""}
                onClick={() => handleMenuClick("programmers")}
              >
                <img src="" alt="" />
                <p>programmers</p>
              </li>
            </ul>
          </li>
          <li
            className={activeMenu === "portfolio" ? "active" : ""}
            onClick={() => handleMenuClick("portfolio")}
          >
            <img src="" alt="" />
            <p>portfolio</p>
            <ul>
              <li
                className={activeMenu === "react" ? "active" : ""}
                onClick={() => handleMenuClick("react")}
              >
                <img src="" alt="" />
                <p>react</p>
              </li>
              <li
                className={activeMenu === "vue" ? "active" : ""}
                onClick={() => handleMenuClick("vue")}
              >
                <img src="" alt="" />
                <p>vue</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
