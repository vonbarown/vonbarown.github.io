import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../Theme/Theme'
import { GlobalStyles } from '../../Theme/Global'
import Toggle from '../../Theme/Toggle'
import { useDarkMode } from '../../Theme/UseDarkMode'
import { DrawerToggleButton } from './DrawerToggle'
import './navigation.css'


export const NavBar = (props) => {

    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />
    }

    return (
        <div className='navbar'>
            <ThemeProvider theme={themeMode} >
                <GlobalStyles />
            </ThemeProvider >
            <h2 className='Voniel-Brown'>Voniel Brown</h2>
            {
                // <div>
                //     <DrawerToggleButton />
                // </div>
            }
            <div className='external-links'>

            </div>

            <div className='navItems'>
                <button className='nav-button' onClick={props.scrollTo} name='home'>Home</button>
                <button className='nav-button' onClick={props.scrollTo} name='about'>About</button>
                <button className='nav-button' onClick={props.scrollTo} name='portfolio'>Projects</button>
                <button className='nav-button' onClick={props.scrollTo} name='contact' >Contact</button>
            </div>

            <div className='toggleButton'>
                Change Theme <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>


        </div>
    )
}