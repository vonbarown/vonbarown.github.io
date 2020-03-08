import React from 'react'
import { Link } from 'react-router-dom'
import './portfolio.css'

const Portfolio = () => {

    const projects = [
        {
            title: 'fwr'
        },
        {
            title: 'fwrfgw'
        },
        {
            title: 'fwrdfqd'
        },
        {
            title: 'fwrdgq'
        }
    ]

    return (
        <div className='portfolioPage'>
            <div className='inner-frame'>
                {
                    projects.map(project => {
                        return <Link to={`/project/${project.title}`} className='project-card' key={project}>
                            {project.title}
                        </Link>
                    })
                }
            </div>
        </div>
    )
}


export default Portfolio