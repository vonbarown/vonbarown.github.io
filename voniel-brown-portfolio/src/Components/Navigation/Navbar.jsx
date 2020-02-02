import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../Theme/Theme'
import { GlobalStyles } from '../../Theme/Global'
import Toggle from '../../Theme/Toggle'
import { useDarkMode } from '../../Theme/UseDarkMode'

import './navigation.css'


export const NavBar = () => {

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
                <a href="/">Home</a> {'  '}
                <a href="/about">About</a>{'  '}
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </div>

            <div className='toggleButton'>
                Change Theme <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>


        </div>
    )
}