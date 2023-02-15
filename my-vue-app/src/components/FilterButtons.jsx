import React, { useState } from "react";
import "./FilterButtons.css";
function FilterButtons() {
  const [icon, changeIcon] = useState([
    {
      iconsrc: "src",
      text: "All",
      status: "not-active",
    },
    {
      iconsrc: "src",
      text: "Headsets",
      status: "not-active",
    },
    {
      iconsrc: "src",
      text: "Computers",
      status: "not-active",
    },
    {
      iconsrc: "src",
      text: "Phones",
      status: "not-active",
    },
    {
      iconsrc: "src",
      text: "Speakers",
      status: "not-active",
    },
  ]);
  console.log(icon);
  return (
    <div className="filter-container">
      <div>
        {icon.map((icon) => {
          return <button className="btn_filter">{icon.text}</button>;
        })}
      </div>
    </div>
  );
}

export default FilterButtons;
