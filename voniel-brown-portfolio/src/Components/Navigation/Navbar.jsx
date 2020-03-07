import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../Theme/Theme'
import { GlobalStyles } from '../../Theme/Global'
import Toggle from '../../Theme/Toggle'
import { useDarkMode } from '../../Theme/UseDarkMode'

import './navigation.css'
import { Link } from 'react-router-dom'


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
            <h3>Voniel Brown</h3>
            <div className='navItems'>
                <button onClick={props.scrollTo} name='home'>Home</button>
                <button onClick={props.scrollTo} name='about'>About</button>
                <button onClick={props.scrollTo} name='portfolio'>Projects</button>
                <button name='contacts' onClick={props.scrollTo}>Contacts</button>
            </div>

            <div className='toggleButton'>
                Change Theme <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>


        </div>
    )
}