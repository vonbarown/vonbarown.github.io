import React from 'react'
import './aboutPage.css'

const About = () => {

    return (
        <div className='aboutPage'>
            <div className='page-title'>
                <h2>About</h2>
            </div>
            {
                <img
                    src="https://avatars2.githubusercontent.com/u/52142269?s=460&v=4"
                    alt="Voniel Brown"
                    className='Voniel'
                />
            }
            <div className='container'>
                <div className='content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit cursus risus.
                    Enim facilisis gravida neque convallis a cras. Tincidunt nunc pulvinar sapien et. Tempus urna et pharetra pharetra massa. Ac turpis egestas sed tempus urna et.
                    Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Augue ut lectus arcu bibendum at.
                    Tellus orci ac auctor augue mauris. Iaculis eu non diam phasellus vestibulum lorem. Volutpat est velit egestas dui id ornare arcu odio.
                    A lacus vestibulum sed arcu non odio euismod lacinia at. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Velit laoreet id donec ultrices tincidunt.
                </div>

            </div>
        </div>
    )
}

export default About