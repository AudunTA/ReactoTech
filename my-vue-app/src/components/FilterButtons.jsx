import React, { useState } from "react";
import "./FilterButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

function FilterButtons() {
  const [icon, changeIcon] = useState([
    {
      id: 0,
      iconsrc: "",
      text: "All",
      status: "not-active",
    },
    {
      id: 1,
      iconsrc: <FontAwesomeIcon icon={faHeadset} />,
      text: "Headsets",
      status: "not-active",
    },
    {
      id: 2,
      iconsrc: "src",
      text: "Computers",
      status: "not-active",
    },
    {
      id: 3,
      iconsrc: "src",
      text: "Phones",
      status: "not-active",
    },
    {
      id: 4,
      iconsrc: <FontAwesomeIcon icon={faVolumeHigh} />,
      text: "Speakers",
      status: "not-active",
    },
  ]);
  console.log(icon);
  return (
    <div className="filter-container">
      <div>
        {icon.map((icon) => {
          return (
            <button key={icon.id} className="btn_filter">
              {icon.iconsrc} {icon.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterButtons;
