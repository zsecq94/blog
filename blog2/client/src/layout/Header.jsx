import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [searchData, setSearchData] = useState("");
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log(searchData);
    }
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);

    console.log("new Branch Test");
  }, [theme]);

  return (
    <header>
      <div>
        <section>
          <Link to={"/"}>
            <b>JK.</b>LOG
          </Link>

          <nav>
            <ul>
              <li>
                <Link
                  className={location.pathname === "/tech" ? "active" : ""}
                  to="/tech"
                >
                  TECH
                </Link>
              </li>

              <li>
                <Link
                  className={location.pathname === "/algo" ? "active" : ""}
                  to="/algo"
                >
                  ALGORITHM
                </Link>
              </li>

              <li>
                <Link
                  className={location.pathname === "/port" ? "active" : ""}
                  to="/port"
                >
                  PORTFOLIO
                </Link>
              </li>
            </ul>
          </nav>
        </section>

        <section>
          <input
            type="text"
            placeholder="PRESS ENTER..."
            onChange={(e) => setSearchData(e.target.value)}
            onKeyDown={handleSearch}
          />
          <button onClick={toggleTheme}>THEME</button>
        </section>
      </div>
    </header>
  );
};

export default Header;
