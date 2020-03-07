import React, { Component } from 'react'
import './portfolio.css'
import { Link } from 'react-router-dom'


class Portfolio extends Component {
    state = {
        projects: ['react', 'js', 'hoon', 'tvityvoj', 'ytvtyglkgc']
    }


    render() {
        return (
            <div className='portfolioPage'>


                {
                    this.state.projects.map(el => {
                        return <Link to={`/project/${el}`} className='project-card'>
                            {el}
                        </Link>
                    })
                }
            </div>
        )
    }
}

export default Portfolio