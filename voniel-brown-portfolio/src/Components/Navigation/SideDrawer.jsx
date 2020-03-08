import React from 'react'

import './navigation.css'

export const SideDrawer = (props) => {
    return (
        <div className='navbar'>
            <ThemeProvider theme={themeMode} >
                <GlobalStyles />
            </ThemeProvider >
            <h2 className='Voniel-Brown'>Voniel Brown</h2>
            <div>
                <DrawerToggleButton />
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