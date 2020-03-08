import React from 'react'
import { Link } from 'react-router-dom'
import './portfolio.css'

const Portfolio = () => {

    const projects = [
        {
            title: `fwr`,
            description: `hello`,
            img_url: ``
        },
        {
            title: `fwrfgw`,
            description: `just`,
            img_url: ``
        },
        {
            title: `fwrdfqd`,
            description: `a`,
            img_url: ``
        },
        {
            title: `fwrdgq`,
            description: `mellow`,
            img_url: ``
        },
        {
            title: `fwrdgqdefq`,
            description: `fellow`,
            img_url: ``
        }
    ]

    return (
        <div className='portfolioPage'>
            <div className='inner-frame'>
                {
                    projects.map(project => {
                        return <Link to={`/project/${project.title}`} className='project-card' key={project}>
                            <p>{project.title}</p>
                            <p>{project.description}</p>
                            <p>{project.img_url}</p>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}


export default Portfolio