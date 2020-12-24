import React from "react";
import "./projects.css";
import { ProjectCard } from "./Card";
import { projects } from './constants'

const Projects = ({ darkMode }) => {
  return (
    <div className="portfolioPage">
      <h1 className="page-title">Projects</h1>
      <div className="inner-frame">
        <div className="flex">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
