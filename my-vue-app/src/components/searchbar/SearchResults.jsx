import React from "react";
import "./SearchResults.css";

function SearchResults(props) {
  const results = props.result;
  return (
    <div className="search-item" key={results.key}>
      <div className="search-img-container">
        <img src={results.imageUrl} className="search-img"></img>
      </div>
      <div className="search-description">
        <h2>{results.title}</h2>
        <p>{results.description}</p>
        <p>{results.price} Kr</p>
        <button className="btn-viewItem">ViewItem</button>
      </div>
    </div>
  );
}

export default SearchResults;
