import React from "react";
import "./BackHome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function BackHome() {
  return (
    <div className="container-backhome">
      <Link to="/">
        <button className="btn_backHome">
          {<FontAwesomeIcon className="backhome-icon" icon={faArrowLeft} />}
          Back home
        </button>
      </Link>
    </div>
  );
}

export default BackHome;
