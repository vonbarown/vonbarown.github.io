import React from "react";
import "./portfolio.css";

export const ProjectCard = ({ project: { title, description, img_url } }) => {
  return (
    <div className="project-card" key={title} id="project-card">
      <div className="project-img-container">
        <img className="project-img" src={img_url} alt={title} />
      </div>
      <div className="project-info">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
