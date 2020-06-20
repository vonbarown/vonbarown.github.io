import React from "react";
import "./aboutPage.css";

const About = () => {
  return (
    <div className="aboutPage">
      <div>
        <h2 className="page-title">About</h2>
      </div>

      <div className="container">
        <div className="content">
          <p className="para-1">
            I came to the United States from Jamaica when I was 8 years old in
            order get a better education. It was an overwhelming experience,
            however it has taught me how to adapt to a diverse and changing
            environment. It was through this experience that I fell in love with
            technology.
          </p>
          <br />
          <p className="para-2">
            I was immediately drawn in by all the experiences and possibilities
            around me. I saw becoming a software engineer as a way to tap into
            all of these different avenues and make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
