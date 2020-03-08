import React, { Component } from 'react'
import Home from '../../Pages/Home/HomePage'
import About from '../../Pages/About/AboutPage'
import { NavBar } from '../Navigation/Navbar'
import { Footer } from '../Navigation/Footer'
import Portfolio from '../../Pages/Projects/PortfolioPage'
import Contact from '../../Pages/Contact/Contact'
import { Element, animateScroll as scroll, scroller } from 'react-scroll'
import { Switch, Route } from 'react-router-dom'

import './Landing.css'

class Landing extends Component {

    scrollToTop = () => scroll.scrollToTop();

    scrollTo(e) {
        scroller.scrollTo(e.target.name, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    render() {
        return (
            <div className='landing'>
                <Switch>
                    <Route path='/project/:id' render={Contact} />
                </Switch>

                <NavBar scrollTo={this.scrollTo} />
                <Element name='home'>
                    <Home />
                </Element>
                <button name='portfolio ' className='button-theme' onClick={this.scrollTo}>\/</button>
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