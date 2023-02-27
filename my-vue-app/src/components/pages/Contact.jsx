import React from "react";
import "./Contact.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BackHome from "../backHome/BackHome";
function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bodyText, setBodyText] = useState("");

  const [errorFirstName, setErrorFirstName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorBodyText, setErrorBodyText] = useState(false);
  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onBodyChange = (event) => {
    setBodyText(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("submitted!");
    console.log(email);
    console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
    if (firstName.length < 3) {
      setErrorFirstName(true);
    } else {
      setErrorFirstName(false);
    }
    if (lastName.length < 3) {
      setErrorLastName(true);
    } else {
      setErrorLastName(false);
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
    if (bodyText.length < 3) {
      setErrorBodyText(true);
    } else {
      setErrorBodyText(false);
    }
  };

  return (
    <div className="wrapper-App">
      <BackHome />
      <div className="wrapper-contact">
        <div className="container-contact">
          <div className="container-left-contact">
            <h2>Contact Information</h2>
            <p>Fill in the form and we will get back to you within 24 hours.</p>

            <div className="wrapper-contact-icon">
              <FontAwesomeIcon className="contact-form-icon" icon={faPhone} />
              <p> +47 40938183</p>
            </div>
            <div className="wrapper-contact-icon">
              <FontAwesomeIcon
                className="contact-form-icon"
                icon={faEnvelope}
              />
              <p> contact@reactotech.com</p>
            </div>
          </div>
          <div className="container-right-contact">
            <form className="contact-form">
              <div className="top-form">
                <label for="first_name">First Name</label>
                <input
                  placeholder="Ola"
                  value={firstName}
                  onChange={onFirstNameChange}
                  name="first_name"
                ></input>
                <label for="last_name">Last Name</label>
                <input
                  placeholder="Last name"
                  value={lastName}
                  onChange={onLastNameChange}
                  name="last_name"
                ></input>
              </div>
              <div className="top-form">
                <div className="error-firstname">
                  {errorFirstName ? "minimum 3 characters" : ""}
                </div>
                <div className="error-lastname">
                  {errorLastName ? "minimum 3 characters" : ""}
                </div>
              </div>
              <div className="middle-form">
                <input
                  type={email}
                  placeholder="email"
                  value={email}
                  onChange={onEmailChange}
                ></input>
                <div className="error-email">
                  {errorEmail ? "not a valid email" : ""}
                </div>
                <textarea
                  placeholder="whats the question?"
                  value={bodyText}
                  onChange={onBodyChange}
                ></textarea>
                <div className="error-bodytext">
                  {errorBodyText ? "minumum 3 characters" : ""}
                </div>
              </div>
              <div className="bottom-form">
                <button type="submit" onClick={submitForm}>
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
