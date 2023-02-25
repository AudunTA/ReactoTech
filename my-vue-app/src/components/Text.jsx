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
  const handleClick = () => {
    setNumProps();
    setClicked(!clicked);
  };
  return (
    <div className="text-container">
      <h2>Trending sales</h2>
      {clicked ? (
        <button className="btn_expand-products" onClick={handleClick}>
          show less
          {<FontAwesomeIcon className="icon-expand" icon={faMinimize} />}
        </button>
      ) : (
        <button className="btn_expand-products" onClick={handleClick}>
          see more
          {
            <FontAwesomeIcon
              className="icon-expand"
              icon={faUpRightAndDownLeftFromCenter}
            />
          }
        </button>
      )}
    </div>
  );
}

export default Text;
