import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Searchbar.css";
function Searchbar() {
  return (
    <div className="div">
      <div className="searchbar-container">
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
        <input
          type="text"
          placeholder="Looking for something specific?"
        ></input>
      </div>
    </div>
  );
}

export default Searchbar;
