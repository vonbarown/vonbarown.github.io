import React from 'react'
import { func, string } from 'prop-types';
import ToggleContainer from './ToggleContainer'

import { FiSun, FiMoon } from "react-icons/fi";
// import { ReactComponent as SunIcon } from './icons/sun.svg';

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return (
        <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
            <FiSun />
            <FiMoon />

        </ToggleContainer>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;