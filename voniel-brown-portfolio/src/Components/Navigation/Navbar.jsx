import React from 'react'
import { DrawerToggleButton } from './DrawerToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navigation.css'


export const NavBar = ({ scrollTo, drawerClick, darkMode, handleThemeToggle }) => {

    return (
        <div className='navbar'>
            <div className='sidebar-toggle-button'>
                <DrawerToggleButton click={drawerClick} />
            </div>
            <h2 className='Voniel-Brown'>Voniel Brown</h2>
            <div className='navigation-items'>

                <div className='nav-buttons'>
                    <button className='nav-button' onClick={scrollTo} name='home'>Home</button>
                    <button className='nav-button' onClick={scrollTo} name='about'>About</button>
                    <button className='nav-button' onClick={scrollTo} name='portfolio'>Projects</button>
                    <button className='nav-button' onClick={scrollTo} name='contact' >Contact</button>
                </div>

                <div className='toggleButton'>
                    <input onChange={handleThemeToggle} type="checkbox" />
                </div>

                <div className='external-links'>
                    <a href="https://github.com/vonbarown">
                        <FontAwesomeIcon className='fa-icon github' icon={['fab', 'github']} />
                    </a>
                    <a href="https://www.linkedin.com/in/vonielbrown/">
                        <FontAwesomeIcon className='fa-icon linked-in' icon={['fab', 'linkedin']} />
                    </a>
                </div>

            </div>

        </div>
    )
}