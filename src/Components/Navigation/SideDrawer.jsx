import React from "react";
import "./navigation.css";
import skills from "../../assets/skills.svg";
import lightbulb from "../../assets/lightbulb.svg";
import user from "../../assets/user.svg";

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
          <button className="nav-button nav-button-scroll">
            <span class="toolTipText">About</span>
            <img
              src={user}
              alt="About"
              onClick={scrollTo}
              name="about"
              className="nav-icon"
            />
          </button>
          <button className="nav-button nav-button-scroll">
            <span class="toolTipText">Projects</span>
            <img
              className="nav-icon"
              src={lightbulb}
              alt="Projects"
              onClick={scrollTo}
              name="projects"
            />
          </button>
          <button className="nav-button nav-button-scroll">
            <span class="toolTipText">Skills</span>
            <img
              className="nav-icon"
              src={skills}
              alt="Skills"
              onClick={scrollTo}
              name="contact"
            />
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};
