import React, { useState } from "react";
import "./FilterButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faVolumeHigh,
  faPhone,
  faShoePrints,
  faList,
  faSprayCanSparkles,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";

function FilterButtons(props) {
  let setFilter = props.setFilter;
  let setNumPosts = props.setNumPosts;
  const [icon, changeIcon] = useState([
    {
      id: 0,
      iconsrc: <FontAwesomeIcon className="filter-icon" icon={faList} />,
      text: "All",
      active: true,
      removefilter: true,
    },
    {
      id: 1,
      iconsrc: <FontAwesomeIcon className="filter-icon" icon={faDesktop} />,
      text: "Electronics",
      active: false,
    },
    {
      id: 2,
      iconsrc: (
        <FontAwesomeIcon className="filter-icon" icon={faSprayCanSparkles} />
      ),
      text: "Perfume",
      active: false,
    },
    {
      id: 3,
      iconsrc: <FontAwesomeIcon className="filter-icon" icon={faShoePrints} />,
      text: "Shoes",
      active: false,
    },
    {
      id: 4,
      iconsrc: <FontAwesomeIcon className="filter-icon" icon={faShirt} />,
      text: "Fashion",
      active: false,
    },
  ]);
  const handleFilterClick = (e) => {
    console.log(e.target.value.toLowerCase());
    setNumPosts(100);
    setFilter(e.target.value.toLowerCase());

    const updatedState = icon.map((obj) => {
      if (obj.text === e.target.value) {
        return {
          ...obj,
          active: true,
        };
      } else {
        return { ...obj, active: false };
      }
      return obj;
    });
    changeIcon(updatedState);
  };
  const removeFilter = () => {
    const removeAllFilters = icon.map((obj) => {
      return {
        ...obj,
        active: false,
      };
    });
    console.log("HALOOOOOOOOOOOOO");
    changeIcon(removeAllFilters);
    setNumPosts(4);
    setFilter("");
  };
  return (
    <div className="filter-container">
      <div>
        {icon.map((icon) => {
          console.log(icon.active);
          let btnClick = handleFilterClick;
          if (icon.removefilter) {
            btnClick = removeFilter;
          }
          let btnClass = "btn_filter";
          if (icon.active) {
            btnClass = "btn_filter active-icon";
          }
          return (
            <button
              key={icon.id}
              className={btnClass}
              value={icon.text}
              onClick={btnClick}
            >
              {icon.iconsrc} {icon.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterButtons;
