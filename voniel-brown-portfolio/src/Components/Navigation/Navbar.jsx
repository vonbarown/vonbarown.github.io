import React from "react";
import { DrawerToggleButton } from "./DrawerToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToggleSwitch } from "./ToggleSwitch";
import "./navigation.css";

export const NavBar = ({
  sideDrawerOpen,
  scrollTo,
  drawerClick,
  darkMode,
  handleThemeToggle
}) => {
  let minWin = document.body.clientWidth;
  let class_name;
  if (minWin < 800) {
    class_name = "";
  } else {
    class_name = "navbar";
  }
  console.log(minWin);
  return (
    <div className={sideDrawerOpen ? "navbar-hidden" : class_name}>
      <div className="sidebar-toggle-button">
        <DrawerToggleButton click={drawerClick} />
      </div>
      <h2 className="Voniel-Brown">Voniel </h2>
      <div className="navigation-items">
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
          <br />
        </div>
        <div className="toggleButton">
          <ToggleSwitch
            handleThemeToggle={handleThemeToggle}
            name={"toggleSwitch"}
            id={"toggleSwitch"}
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
