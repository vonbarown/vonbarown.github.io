import React from "react";
import { Skills } from "../../Components/Skills/Skills";
import "./contact.css";

const Contact = () => {
  const handleButtonClick = () =>
    (window.location.href = `mailto:vonielbrown@pursuit.org`);

  return (
    <div className="contactPage">
      <h1 className="page-title" id="skills">
        Skills
      </h1>
      <div className="skills-component">
        <Skills />
      </div>

      <div className="contact-btn-container">
        <button className="submit" onClick={handleButtonClick}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default Contact;
