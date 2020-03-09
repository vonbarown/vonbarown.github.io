import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../Theme/Theme'
import { GlobalStyles } from '../../Theme/Global'
import Toggle from '../../Theme/Toggle'
import { useDarkMode } from '../../Theme/UseDarkMode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navigation.css'

export const SideDrawer = ({ scrollTo, show }) => {
    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />
    }

    let drawerClassNames = ['side-drawer navbar']

    if (show) {
        drawerClassNames = ['side-drawer open']
    }

    return (
        <div className={drawerClassNames}>
            <ThemeProvider theme={themeMode} >
                <GlobalStyles />
            </ThemeProvider >
            <h2 className='Voniel-Brown'>Voniel Brown</h2>

            <div className='external-links'>
                <a href="https://github.com/vonbarown">
                    <FontAwesomeIcon className='fa-icon github' icon={['fab', 'github']} />
                </a>
                <a href="https://www.linkedin.com/in/vonielbrown/">
                    <FontAwesomeIcon className='fa-icon linked-in' icon={['fab', 'linkedin']} />
                </a>
            </div>
            <div className='nav-buttons'>
                <button className='nav-button' onClick={scrollTo} name='home'>Home</button>
                <button className='nav-button' onClick={scrollTo} name='about'>About</button>
                <button className='nav-button' onClick={scrollTo} name='portfolio'>Projects</button>
                <button className='nav-button' onClick={scrollTo} name='contact' >Contact</button>
            </div>

            <div className='toggleButton'>
                Change Theme <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>


        </div>
    )
}