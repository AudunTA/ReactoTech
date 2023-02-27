import React from "react";
import "./Contact.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
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
          <div className="contact-navigation">
            <h2 className="contact-text">Contact form</h2>
          </div>

          <form className="contact-form">
            <div className="top-form">
              <input
                placeholder="Your first name"
                value={firstName}
                onChange={onFirstNameChange}
              ></input>
              <input
                placeholder="Last name"
                value={lastName}
                onChange={onLastNameChange}
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
  );
}

export default Contact;
