import React from 'react'
import './navigation.css'

export const DrawerToggleButton = (props) => {
    return (
        <button className='toggle-button'>
            <div className='toggler-line' />
            <div className='toggler-line' />
            <div className='toggler-line' />
        </button>
    )
}