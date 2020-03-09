import React from 'react'
import './navigation.css'

export const DrawerToggleButton = ({ click }) => {
    return (
        <button className='toggle-button' onClick={click}>
            <div className='toggler-line' />
            <div className='toggler-line' />
            <div className='toggler-line' />
        </button>
    )
}