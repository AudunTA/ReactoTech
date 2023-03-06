import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Searchbar.css";
import SearchResults from "./SearchResults";
import { useState } from "react";
function Searchbar(props) {
  let products = props.prodcuts;

  const [results, setResults] = useState([]);
  const search = (event) => {
    let matchingProducts = products.filter((product) =>
      product.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    if (event.target.value.length > 2) {
      setResults(matchingProducts);
    } else {
      setResults([]);
    }
  };
  return (
    <div className="div">
      <div className="searchbar-container">
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
        <input
          onChange={search}
          type="text"
          placeholder="Looking for something specific?"
        ></input>
        <div className="search-content">
          {results.map((ele) => {
            return <SearchResults key={ele.id} result={ele} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
