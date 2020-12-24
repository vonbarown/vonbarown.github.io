import React from "react";
import "./projects.css";
import { ProjectCard } from "./Card";
import synergie_landing from "../../Assets/synergie-landing.png";
import portfolio_light from "../../Assets/portfolio_light.png";
import portfolio_page from "../../Assets/portfolio_page.png";
import A9 from "../../Assets/A9.png";
import SDM from "../../Assets/student-data-management.png";
import pantry from "../../Assets/pantry.png";
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
