import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faCartShopping,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";
import { create } from "zustand";

export const cartStatus = create((set, get) => ({
  open: false,
  toggleOpen: () => set((state) => ({ open: !state.open })),
}));

function Header(props) {
  let numCart = props.numCartItem;
  const [theme, setTheme] = useState();

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);
    settingTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      settingTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
      settingTheme("light");
    }
  };

  const settingTheme = (theme) => {
    if (theme === "light") {
      document.documentElement.style.cssText =
        "--main-color: #FFFFFF; --secondary-color: #FFFFFF; --btn-solid-color: #FFFFFF; --main-text-color: #272C45; --border-color: #E4E4E7; --btn-addCart: rgba(81, 69, 229, 0.9); --background-gradient-1:#f1f1f1; --background-gradient-2: #f1f1f1; --bacground-blur-color: #FFFFFF; --searchbar-color: #FFFFFF;   --cart-item-bg: #F1F1F1; --img-brightness: brightness(100%); --product-third-color: #f6f6f6 --text-description: #7a7e83;";
    } else {
      document.documentElement.style.cssText =
        "--main-color: rgba(255, 255, 255, 0.1); --secondary-color: rgba(18, 18, 18, 0.2); --btn-solid-color: #272727; --main-text-color: #f1f1f1; --border-color: #222222; --btn-addCart: rgba(81, 69, 229, 0.9); --background-gradient-1:#0f0f0f; --background-gradient-2: #272727; --bacground-blur-color: rgb(106, 188, 202); --searchbar-color: #272727;   --cart-item-bg: rgba(18, 18, 18, 0.2); --img-brightness: brightness(60%); --product-third-color: #304e53; --text-description: #f1f1f1;";
    }
  };
  const updateCartStatus = () => {
    cartStatus.getState().toggleOpen();
    console.log(cartStatus.getState().open);
  };

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <h2>ReactoTech</h2>
        <div className="div-flex">
          <div className="container-icon">
            <FontAwesomeIcon
              className="header-icon"
              icon={faMoon}
              onClick={toggleTheme}
              size={70}
            />
          </div>
          <Link to={"/contact"}>
            <FontAwesomeIcon
              className="header-icon"
              icon={faEnvelope}
              size={70}
              onClick={updateCartStatus}
            />
          </Link>
          <div className="container-icon cart-header">
            <Link to={"/cart"} style={{ textDecoration: "none" }}>
              {" "}
              <FontAwesomeIcon
                className="header-icon"
                icon={faCartShopping}
                size={70}
                onClick={updateCartStatus}
              />{" "}
            </Link>
            <div className="num-cart">
              <p>{numCart}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
