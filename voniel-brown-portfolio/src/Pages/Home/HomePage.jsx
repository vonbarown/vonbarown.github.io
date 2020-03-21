import React from "react";
import logo from "../../assets/logo.png";
import "./homepage.css";

const Home = () => {
  const handleButtonClick = () =>
    (window.location.href = `mailto:vonielbrown@pursuit.org`);

  return (
    <div className="homePage">
      <img src={logo} alt="logo" className="logo" />
      <div className="intro">
        Hello, My Name is <h1>Voniel Brown</h1>
      </div>
      <div>
        Full Stack software engineering fellow currently studying at Pursuit
      </div>
      <div className="contact-btn-container">
        <button className="submit" onClick={handleButtonClick}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default Home;
