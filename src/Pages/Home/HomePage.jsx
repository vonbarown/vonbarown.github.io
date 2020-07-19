import React from "react";
import logo from "../../assets/logo.svg";

import "./homepage.css";

const Home = () => {
  const handleButtonClick = () =>
    (window.location.href = `mailto:vonielbrown@pursuit.org`);

  return (
    <div className="homePage">
      <img src={logo} alt="logo" className="logo" />
      <div className="intro">
        Hello, My Name is <h1 style={{ marginLeft: "15px" }}> Voniel Brown </h1>
      </div>
      <div>
        Full Stack software engineer currently studying at
        <a
          id="pursuit"
          href="https://www.pursuit.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pursuit
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
