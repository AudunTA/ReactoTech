import React from "react";
import "./Text.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightAndDownLeftFromCenter,
  faMinimize,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Text(props) {
  const [clicked, setClicked] = useState(false);
  let setNumProps = props.setNumPosts;
  let filter = props.filter;
  const handleClick = () => {
    setNumProps();
    setClicked(!clicked);
  };
  console.log("filter length ", filter.length);
  return (
    <div className="text-container">
      {filter.length > 0 ? (
        <h2>results for: {filter}</h2>
      ) : (
        <h2>Trending sales</h2>
      )}
      {filter.length < 1 && (
        <button className="btn_expand-products" onClick={handleClick}>
          {clicked ? (
            <>
              show less
              <FontAwesomeIcon className="icon-expand" icon={faMinimize} />
            </>
          ) : (
            <>
              see more
              <FontAwesomeIcon
                className="icon-expand"
                icon={faUpRightAndDownLeftFromCenter}
              />
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default Text;
