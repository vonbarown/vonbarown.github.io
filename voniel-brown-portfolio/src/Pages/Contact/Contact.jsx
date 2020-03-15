import React from "react";
import { Skills } from "../../Components/Skills/Skills";
import "./contact.css";

const Contact = () => {
  const handleButtonClick = () =>
    (window.location.href = `mailto:vonielbrown@pursuit.org`);

  return (
    <div className="contactPage">
      <div className="contactPage-formField">
        <div className="skills-component-contact">
          <Skills />
        </div>

        <div className="contact-btn-container">
          <button className="submit button-theme" onClick={handleButtonClick}>
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
