import React from "react";
import logo from "../../Assets/logo.svg";

import "./homepage.css";

const Home = () => {
  const handleButtonClick = () =>
    (window.location.href = `mailto:vonielbrown@pursuit.org`);

  return (
    <div className="homePage">
      <img src={logo} alt="logo" className="logo" />
      <div className="intro">
        Hello, My Name is{" "}
        <h1 style={{ marginLeft: "15px" }}>
          <b>Voniel Brown</b>{" "}
        </h1>
      </div>
      <div>
        A Software Engineering Apprentice at
        <a
          id="external-company"
          href="https://www.codecademy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Codecademy
        </a>
        .
      </div>
      <div className="contact-btn-container home-contact-btn">
        <button className="submit" onClick={handleButtonClick}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default Home;
