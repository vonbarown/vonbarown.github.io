import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../../Pages/Home/HomePage'
import About from '../../Pages/About/AboutPage'
import { NavBar } from '../Navigation/Navbar'
import { Footer } from '../Navigation/Footer'
import Portfolio from '../../Pages/Portfolio/PortfolioPage'
import Contact from '../../Pages/Contact/Contact'
import './Landing.css'

const Landing = () => {

    return (
        <div className='landing'>
            <NavBar />
            { // <Switch>
                //     <Route path='/contact' component={Contact} />
                //     <Route path='/about' component={About} />
                //     <Route path='/portfolio' component={Portfolio} />
                //     <Route path='/' component={Home} />
                // </Switch>
            }
            <Home />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
        </div >
    )
}

export default Landing