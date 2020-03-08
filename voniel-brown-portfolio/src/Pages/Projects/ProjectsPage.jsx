import React from 'react'
import './portfolio.css'
import { ProjectCard } from './projectCard'

const Portfolio = () => {

    const projects = [
        {
            title: `fwr`,
            description: `hello`,
            img_url: ``,
            live: '',
            repo: ''
        },
        {
            title: `fwrfgw`,
            description: `just`,
            img_url: ``,
            live: '',
            repo: ''
        },
        {
            title: `fwrdfqd`,
            description: `a`,
            img_url: ``,
            live: '',
            repo: ''
        },
        {
            title: `fwrdgq`,
            description: `mellow`,
            img_url: ``,
            live: '',
            repo: ''
        },
        {
            title: `fwrdgqdefq`,
            description: `fellow`,
            img_url: ``,
            live: '',
            repo: ''
        },
        {
            title: `fwrdgdqqdefq`,
            description: `just`,
            img_url: ``,
            live: '',
            repo: ''
        },

    ]

    return (
        <div className='portfolioPage'>
            <div className='inner-frame'>
                <div className='grid'>
                    {
                        projects.map(project => <ProjectCard project={project} />)
                    }
                </div>
            </div>
        </div>
    )
}


export default Portfolio