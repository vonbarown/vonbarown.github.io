import React from "react";
import { ToggleSwitch } from "./ToggleSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navigation.css";

export const SideDrawer = ({ scrollTo, show, darkMode, handleThemeToggle }) => {
  let drawerClassNames = ["side-drawer"];

  if (show) {
    drawerClassNames = " open";
  }

  return (
    <div className={drawerClassNames}>
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
      <div className="nav-buttons">
        <button className="nav-button" onClick={scrollTo} name="home">
          Home
        </button>
        <button className="nav-button" onClick={scrollTo} name="about">
          About
        </button>
        <button className="nav-button" onClick={scrollTo} name="portfolio">
          Projects
        </button>
        <button className="nav-button" onClick={scrollTo} name="contact">
          Contact
        </button>
      </div>

      <div className="toggleButton">
        <ToggleSwitch
          handleThemeToggle={handleThemeToggle}
          name={"toggleSwitch"}
          id={"toggleSwitch"}
        />
      </div>
    </div>
  );
};
