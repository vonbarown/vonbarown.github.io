import React from 'react'

export const ProjectCard = ({ project }) => {
    return (
        <div className='project-card' key={project}>
            <p>{project.title}</p>
            <p>{project.description}</p>
            <img src={project.img_url} alt={project.title} />
        </div>
    )
}