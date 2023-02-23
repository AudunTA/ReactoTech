import React from "react";
import "./Contact.css";
import { useState } from "react";
function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bodyText, setBodyText] = useState("");

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
    console.log(firstName, lastName, email);
  };
  return (
    <div className="wrapper-App">
      <div className="container-contact">
        <form className="contact-form">
          <div className="top-form">
            <input
              placeholder="Your first name"
              value={firstName}
              onChange={onFirstNameChange}
            ></input>
            <input placeholder="Last name"></input>
          </div>
          <div className="middle-form">
            <input placeholder="email"></input>
            <textarea placeholder="whats the question?"></textarea>
          </div>
          <div className="bottom-form">
            <button type="submit" onClick={submitForm}>
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
