import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
function Header() {
  return (
    <div className="header-container">
      <h1>Logo</h1>
      <FontAwesomeIcon className="header-icon" icon={faMoon} />
    </div>
  );
}

export default Header;
