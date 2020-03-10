import React, { Component } from 'react'
import Home from '../../Pages/Home/HomePage'
import About from '../../Pages/About/BioPage'
import { NavBar } from '../Navigation/Navbar'
import { Footer } from '../Navigation/Footer'
import Portfolio from '../../Pages/Projects/ProjectsPage'
import Contact from '../../Pages/Contact/Contact'
import { Element, animateScroll as scroll, scroller } from 'react-scroll'
import { SideDrawer } from '../Navigation/SideDrawer';
import { Backdrop } from '../Navigation/Backdrop/Backdrop'
import './Landing.css'

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
            document.body.style = 'background  black'
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
                <SideDrawer scrollTo={this.scrollTo} show={this.state.sideDrawerOpen} />
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