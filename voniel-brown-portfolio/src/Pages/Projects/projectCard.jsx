import React from 'react'

export const ProjectCard = ({ project: { title, description, img_url } }) => {
    return (
        <div className='project-card' key={title}>
            <p>{title}</p>
            <p>{description}</p>
            <img src={img_url} alt={title} />
        </div>
    )
}