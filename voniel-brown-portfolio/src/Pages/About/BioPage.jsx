import React from "react";
import "./aboutPage.css";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="page-title">
        <h2>About</h2>
      </div>
      {
        <img
          src="https://avatars2.githubusercontent.com/u/52142269?s=460&v=4"
          alt="Voniel Brown"
          className="Voniel"
        />
      }
      <div className="container">
        <div className="content">
          <p className="para-1">
            I came to the United States from Jamaica when I was 8 years old in
            order get a better education. I was my very first time ever leaving
            the country, When I first arrived it was a drastic change in culture
            and environment. It was an overwhelming experience, however it has
            taught me how to adapt to a diverse and changing environment.
          </p>
          <p className="para-2">
            I was immediately drawn in by all the experiences around me
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
