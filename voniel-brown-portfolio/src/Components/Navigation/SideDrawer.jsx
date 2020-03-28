import React from "react";
import "./navigation.css";
import pen from "../../assets/pen.svg";
import project from "../../assets/project-management.svg";
import about from "../../assets/about.svg";

export const SideDrawer = ({ scrollTo, show, darkMode, handleThemeToggle }) => {
  let drawerClassNames = ["side-drawer"];

  if (show) {
    drawerClassNames = " open";
  }

  return (
    <div className={drawerClassNames}>
      <div className="navigation-items">
        <div className="nav-buttons">
          <button
            className="nav-button"
            id="Voniel-Brown"
            onClick={scrollTo}
            name="home"
          >
            VB
          </button>
          <button className="nav-button">
            <img
              src={about}
              alt="About"
              onClick={scrollTo}
              name="about"
              className="nav-icon"
              title="About"
            />
          </button>
          <button className="nav-button">
            <img
              className="nav-icon"
              src={project}
              alt="Projects"
              onClick={scrollTo}
              name="projects"
              title="Projects"
            />
          </button>
          <button className="nav-button">
            <img
              className="nav-icon"
              src={pen}
              alt="Skills"
              onClick={scrollTo}
              name="contact"
              title="Skills"
            />
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};
