import React from "react";
import "./navigation.css";
import skills from "../../Assets/skills.svg";
import lightbulb from "../../Assets/lightbulb.svg";
import user from "../../Assets/user.svg";

export const SideDrawer = ({ scrollTo, show, darkMode, handleThemeToggle }) => {
  let drawerClassNames = ["side-drawer"];

  if (show) {
    drawerClassNames = "open";
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
          <button
            className="nav-button nav-button-scroll  toolTipTextParent"
            onClick={scrollTo}
            name="projects"
          >
            <span className="toolTipText">Projects</span>
            <img
              className="nav-icon"
              src={lightbulb}
              alt="Projects"
              name="projects"
            />
          </button>
          <button
            className="nav-button nav-button-scroll toolTipTextParent"
            name="about"
            onClick={scrollTo}
          >
            <span className="toolTipText">About</span>
            <img src={user} alt="About" name="about" className="nav-icon" />
          </button>
          <button
            className="nav-button nav-button-scroll toolTipTextParent"
            onClick={scrollTo}
            name="contact"
          >
            <span className="toolTipText">Skills</span>
            <img
              className="nav-icon"
              src={skills}
              alt="Skills"
              name="contact"
            />
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};
