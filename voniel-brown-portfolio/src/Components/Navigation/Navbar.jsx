import React from "react";
import { DrawerToggleButton } from "./DrawerToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navigation.css";
import Toggle from "react-toggle";
export const NavBar = ({
  scrollTo,
  drawerClick,
  darkMode,
  handleThemeToggle
}) => {
  return (
    <div className="navbar">
      <div className="sidebar-toggle-button">
        <DrawerToggleButton click={drawerClick} />
      </div>
      <div className="navigation-items">
        <div className="nav-buttons">
          <button
            className="nav-button"
            id="Voniel-Brown"
            onClick={scrollTo}
            name="home"
          >
            Voniel
          </button>
          <button className="nav-button" onClick={scrollTo} name="about">
            About
          </button>
          <button className="nav-button" onClick={scrollTo} name="projects">
            Projects
          </button>
          <button className="nav-button" onClick={scrollTo} name="contact">
            Skills
          </button>
          <br />
        </div>
        <div className="theme-toggle-btn">
          <Toggle
            id="cheese-status"
            defaultChecked={darkMode}
            onChange={handleThemeToggle}
          />
        </div>

        <div className="external-links">
          <a href="https://github.com/vonbarown">
            <FontAwesomeIcon
              className="fa-icon github"
              icon={["fab", "github"]}
            />
          </a>
          <a href="https://www.linkedin.com/in/vonielbrown/">
            <FontAwesomeIcon
              className="fa-icon linked-in"
              icon={["fab", "linkedin"]}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
