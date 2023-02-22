import React from "react";
import "./Text.css";
function Text(props) {
  let setNumProps = props.setNumPosts;
  return (
    <div className="text-container">
      <h2>Trending sales</h2>
      <p onClick={setNumProps}>See all</p>
    </div>
  );
}

export default Text;
