import React, { Component } from 'react'
import Home from '../../Pages/Home/HomePage'
import About from '../../Pages/About/AboutPage'
import { NavBar } from '../Navigation/Navbar'
import { Footer } from '../Navigation/Footer'
import Portfolio from '../../Pages/Portfolio/PortfolioPage'
import Contact from '../../Pages/Contact/Contact'
import { Element, animateScroll as scroll, scroller } from 'react-scroll'

import './Landing.css'

class Landing extends Component {

    scrollToTop = () => {
        console.log('hello');

        scroll.scrollToTop();
    }
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
                <NavBar scrollTo={this.scrollTo} />
                <Home />
                <button name='portfolio' onClick={this.scrollTo}>\/</button>
                <Element name='portfolio'>
                    <Portfolio />
                </Element>
                <Element name='about'>
                    <About />
                </Element>
                <Element name='contacts'>
                    <Contact />
                </Element>
                <button className='scrollToTop' onClick={this.scrollToTop}>Scroll Up</button>
                <Footer />
            </div >
        )
    }
}

export default Landing