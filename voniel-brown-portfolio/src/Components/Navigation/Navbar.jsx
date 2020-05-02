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
          <button className="nav-button">
            <img
              src={user}
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
              src={lightbulb}
              alt="Projects"
              onClick={scrollTo}
              name="projects"
              title="Projects"
            />
          </button>
          <button className="nav-button">
            <img
              className="nav-icon"
              src={skills}
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
