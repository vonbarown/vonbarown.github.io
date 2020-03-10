import React, { Component } from 'react'
import Home from './Pages/Home/HomePage'
import About from './Pages/About/BioPage'
import { NavBar } from './Components/Navigation/Navbar'
import { Footer } from './Components/Navigation/Footer'
import Portfolio from './Pages/Projects/ProjectsPage'
import Contact from './Pages/Contact/Contact'
import { Element, animateScroll as scroll, scroller } from 'react-scroll'
import { SideDrawer } from './Components/Navigation/SideDrawer';
import { Backdrop } from './Components/Navigation/Backdrop/Backdrop'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'


library.add(faGithub, faLinkedin, faCheckSquare, faCoffee)


class Landing extends Component {
    state = {
        sideDrawerOpen: false,
        darkMode: false
    }

    scrollToTop = () => scroll.scrollToTop();

    scrollTo(e) {
        scroller.scrollTo(e.target.name, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    drawerToggler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
    }

    backDropClick = () => {
        this.setState({
            sideDrawerOpen: false
        })
    }

    handleThemeToggle = (e) => {
        this.setState({ darkMode: e.target.checked })
        if (e.target.checked) {
            document.body.style = 'background  black;'
        } else {
            document.body.style = 'background: white; transition: 0.5s ease;';
        }
    }

    render() {
        let backDrop;

        if (this.state.sideDrawerOpen) {
            backDrop = <Backdrop clicked={this.backDropClick} />

        }

        return (
            <div className={
                this.state.darkMode
                    ? 'landing darkMode'
                    : 'landing'
            }>
                <SideDrawer
                    scrollTo={this.scrollTo}
                    show={this.state.sideDrawerOpen}
                    darkMode={this.state.darkMode}
                    handleThemeToggle={this.handleThemeToggle}
                />
                {backDrop}
                <NavBar
                    scrollTo={this.scrollTo}
                    drawerClick={this.drawerToggler}
                    darkMode={this.state.darkMode}
                    handleThemeToggle={this.handleThemeToggle}
                />
                <Element name='home' className='homePage'>
                    <Home />
                    <button name='portfolio ' className='button-theme' onClick={this.scrollTo}>\/</button>
                </Element>
                <Element name='portfolio'>
                    <Portfolio />
                </Element>
                <Element name='about'>
                    <About />
                </Element>
                <Element name='contact'>
                    <Contact />
                </Element>
                <button className='scrollToTop button-theme' onClick={this.scrollToTop}>Scroll Up</button>
                <Footer />
            </div >
        )
    }
}

export default Landing