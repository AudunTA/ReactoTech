import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
function Header() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    console.log(theme);
    if (theme === "light") {
      document.documentElement.style.cssText =
        "--main-color: rgba(255, 255, 255, 0.1); --secondary-color: rgba(18, 18, 18, 0.2); --btn-solid-color: #272727; --main-text-color: #f1f1f1; --border-color: #222222; --btn-addCart: rgba(81, 69, 229, 0.9); --background-gradient-1:#0f0f0f; --background-gradient-2: #272727;";

      setTheme("dark");
    } else {
      document.documentElement.style.cssText =
        "--main-color: #FFFFFF; --secondary-color: #F8FAFB; --btn-solid-color: #FFFFFF; --main-text-color: #272C45; --border-color: #E4E4E7; --btn-addCart: rgba(81, 69, 229, 0.9); --background-gradient-1:#FFFFFF; --background-gradient-2: #FFFFFF;";
      setTheme("light");
    }
  };

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <h1>Logo</h1>
        <div className="div">
          <FontAwesomeIcon
            className="header-icon"
            icon={faMoon}
            onClick={toggleTheme}
            size={70}
          />
          <FontAwesomeIcon
            className="header-icon"
            icon={faCartShopping}
            size={70}
          />
          <img
            className="header-profile-icon"
            src="./src\images\avatar.png"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
