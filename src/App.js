import React, { Component } from "react";
import Home from "./Pages/Home/HomePage";
import About from "./Pages/About/BioPage";
import { NavBar } from "./Components/Navigation/Navbar";
import { Footer } from "./Components/Navigation/Footer";
import Toggle from "react-toggle";
import Projects from "./Pages/Projects/ProjectsPage";
import Contact from "./Pages/Contact/Contact";
import { Element, animateScroll as scroll, scroller } from "react-scroll";
import { SideDrawer } from "./Components/Navigation/SideDrawer";
import { Backdrop } from "./Components/Navigation/Backdrop/Backdrop";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faReact,
  faCss3Alt,
  faHtml5,
  faJs,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faCopyright } from "@fortawesome/free-solid-svg-icons";

library.add(
  faGithub,
  faLinkedin,
  faReact,
  faCss3Alt,
  faHtml5,
  faJs,
  faGitAlt,
  faArrowLeft,
  faCopyright
);

class Landing extends Component {
  state = {
    sideDrawerOpen: false,
    darkMode: false,
    visible: true,
    toggle: false,
    timer: null,
  };

  componentDidMount() {
    //add eventListener to check for the users preferred device
    window.addEventListener("scroll", this.handleScroll);

    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkPref.matches) {
      console.log(darkPref);
      this.setState((prevState) => {
        return {
          darkMode: !prevState.darkMode,
          toggle: !prevState.toggle,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          toggle: !prevState.toggle,
        };
      });
    }
  }

  scrollToTop = () => scroll.scrollToTop();

  scrollTo(e) {
    scroller.scrollTo(e.target.name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  drawerToggler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClick = () => {
    this.setState({
      sideDrawerOpen: false,
    });
  };

  handleThemeToggle = (e) => {
    this.setState({ darkMode: e.target.checked });
    if (e.target.checked) {
      document.body.style.backgroundColor = "black;";
    } else {
      document.body.style = "background: white-smoke; transition: 0.5s ease;";
    }
  };
  handleScroll = () => {
    const { prevScrollPos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    this.setState({
      prevScrollPos: currentScrollPos,
      visible,
    });
  };

  render() {
    let backDrop;
    let activeToggle;

    let { visible, darkMode, toggle, sideDrawerOpen, blink } = this.state;
    console.log(blink);

    if (sideDrawerOpen) {
      backDrop = <Backdrop clicked={this.backDropClick} />;
    }
    if (toggle) {
      activeToggle = (
        <Toggle
          id="cheese-status"
          defaultChecked={darkMode}
          onChange={this.handleThemeToggle}
        />
      );
    }
    return (
      <div className={darkMode ? "landing darkMode" : "App"}>
        <SideDrawer
          scrollTo={this.scrollTo}
          show={sideDrawerOpen}
          handleThemeToggle={this.handleThemeToggle}
        />
        {backDrop}
        {visible ? (
          <NavBar
            sideDrawerOpen={sideDrawerOpen}
            scrollTo={this.scrollTo}
            drawerClick={this.drawerToggler}
          />
        ) : null}
        <div className="theme-toggle-btn">{activeToggle}</div>
        <Element name="home" className="homePage">
          <Home />

          {visible ? (
            <button
              name="projects"
              className="scrollDown"
              onClick={this.scrollTo}
            >
              V
            </button>
          ) : null}
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        {<Footer />}
        {!visible ? (
          <button
            className="scrollToTop button-theme nav-scroll"
            onClick={this.scrollToTop}
          >
            Top
          </button>
        ) : null}
      </div>
    );
  }
}

export default Landing;
