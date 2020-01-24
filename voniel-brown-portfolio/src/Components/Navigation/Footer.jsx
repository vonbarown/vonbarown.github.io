import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const Footer = () => {
    return (
        <div className='footer'>

            <a href="https://github.com/vonbarown"><FaGithub /></a>{' '}
            <a href="https://www.linkedin.com/in/vonielbrown/"><FaLinkedin /></a>
        </div>
    )
}