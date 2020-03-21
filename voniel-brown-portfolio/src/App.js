import React, { Component } from "react";
import Home from "./Pages/Home/HomePage";
import About from "./Pages/About/BioPage";
import { NavBar } from "./Components/Navigation/Navbar";
// import { Footer } from './Components/Navigation/Footer'
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
  faGitAlt
} from "@fortawesome/free-brands-svg-icons";

library.add(faGithub, faLinkedin, faReact, faCss3Alt, faHtml5, faJs, faGitAlt);

class Landing extends Component {
  state = {
    sideDrawerOpen: false,
    darkMode: false,
    visible: true
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  scrollToTop = () => scroll.scrollToTop();

  scrollTo(e) {
    scroller.scrollTo(e.target.name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  drawerToggler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClick = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };

  handleThemeToggle = e => {
    this.setState({ darkMode: e.target.checked });
    if (e.target.checked) {
      document.body.style = "background  black;";
    } else {
      document.body.style = "background: white; transition: 0.5s ease;";
    }
  };
  handleScroll = () => {
    const { prevScrollPos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    this.setState({
      prevScrollPos: currentScrollPos,
      visible
    });
  };

  render() {
    let backDrop;
    const { visible } = this.state;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop clicked={this.backDropClick} />;
    }

    return (
      <div className={this.state.darkMode ? "landing darkMode" : "App"}>
        <SideDrawer
          scrollTo={this.scrollTo}
          show={this.state.sideDrawerOpen}
          darkMode={this.state.darkMode}
          handleThemeToggle={this.handleThemeToggle}
        />
        {backDrop}
        <NavBar
          sideDrawerOpen={this.state.sideDrawerOpen}
          scrollTo={this.scrollTo}
          drawerClick={this.drawerToggler}
          darkMode={this.state.darkMode}
          handleThemeToggle={this.handleThemeToggle}
        />
        <Element name="home" className="homePage">
          <Home />

          {visible ? (
            <button
              name="projects"
              className="button-theme nav-scroll"
              onClick={this.scrollTo}
            >
              \/
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

        {// <Footer />
        !visible ? (
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
