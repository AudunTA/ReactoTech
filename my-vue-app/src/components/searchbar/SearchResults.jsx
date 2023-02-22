import React from "react";
import "./SearchResults.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function SearchResults(props) {
  const results = props.result;
  return (
    <div className="search-item" key={results.key}>
      <FontAwesomeIcon className="search-result-icon" icon={faSearch} />
      <p>{results.title}</p>
    </div>
  );
}

export default SearchResults;
