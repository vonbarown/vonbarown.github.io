import React, { Component } from 'react'
import './portfolio.css'


class Portfolio extends Component {
    state = {
        projects: ['react', 'js', 'hoon', 'tvityvoj', 'ytvtyglkgc']
    }


    render() {
        return (
            <div className='portfolioPage'>


                {
                    this.state.projects.map(el => {
                        return <div className='project-card'>{el}</div>
                    })
                }
            </div>
        )
    }
}

export default Portfolio