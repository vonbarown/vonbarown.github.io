import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../../Pages/Home/HomePage'
import About from '../../Pages/About/AboutPage'
import { NavBar } from '../Navigation/Navbar'
import { Footer } from '../Navigation/Footer'
import Portfolio from '../../Pages/Portfolio/PortfolioPage'
import './Landing.css'

const Landing = () => {

    return (
        <div className='landing'>
            <NavBar />
            <Switch>
                <Route path='/about' component={About} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/' component={Home} />
            </Switch>
            <Footer />
        </div >
    )
}

export default Landing