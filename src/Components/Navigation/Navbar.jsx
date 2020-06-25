import React from "react";
import { DrawerToggleButton } from "./DrawerToggle";
import "./navigation.css";
import skills from "../../assets/skills.svg";
import lightbulb from "../../assets/lightbulb.svg";
import user from "../../assets/user.svg";
export const NavBar = ({ scrollTo, drawerClick }) => {
  return (
    <div className="navbar">
      <div className="sidebar-toggle-button">
        <DrawerToggleButton click={drawerClick} />
      </div>
      <div className="navigation-items">
        <div className="nav-buttons">
          <button
            className="name"
            id="Voniel-Brown"
            onClick={scrollTo}
            name="home"
          >
            VB
          </button>
          <button
            className="nav-button nav-button-scroll"
            onClick={scrollTo}
            name="about"
          >
            <span class="toolTipText">About</span>
            <img src={user} alt="About" name="about" className="nav-icon" />
          </button>
          <button
            className="nav-button nav-button-scroll"
            onClick={scrollTo}
            name="projects"
          >
            <span class="toolTipText">Projects</span>
            <img
              className="nav-icon"
              src={lightbulb}
              alt="Projects"
              name="projects"
            />
          </button>
          <button
            className="nav-button nav-button-scroll"
            onClick={scrollTo}
            name="contact"
          >
            <span class="toolTipText">Skills</span>
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
