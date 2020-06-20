import React from "react";
import "./projects.css";
import { ProjectCard } from "./Card";
import synergie_landing from "../../assets/synergie-landing.png";
import portfolio_light from "../../assets/portfolio_light.png";

const Projects = () => {
  const projects = [
    {
      title: `Synergie`,
      description: `
      Synergie is a full-stack react app, that allows users to keep track of their favorite shows.
      Allowing users to plan their binging sessions with their friends.We know that life can be busy, now you can keep track of the
      shows that you love.`,
      img_url: synergie_landing,
      live: `https://synergie-watch-list.herokuapp.com/`,
      repo: `https://github.com/vonbarown/Watch-List`,
    },
    {
      title: `Portfolio Site`,
      description: `
        My portfolio site built using react
      `,
      img_url: portfolio_light,
      live: `https://vonielbrown.com/`,
      repo: `https://github.com/vonbarown/vonbarown.github.io`,
    },
    // {
    //   title: `WanderFull`,
    //   description: `
    //     My portfolio site built using react
    //   `,
    //   img_url: portfolio_light,
    //   live: `https://wanderfull-react.herokuapp.com`,
    //   repo: `https://github.com/vonbarown/WanderFull`,
    // },
  ];

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
