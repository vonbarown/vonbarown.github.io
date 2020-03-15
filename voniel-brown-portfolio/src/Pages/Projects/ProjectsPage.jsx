import React from "react";
import "./portfolio.css";
import { ProjectCard } from "./projectCard";

const Portfolio = () => {
  const projects = [
    {
      title: `Synergie`,
      description: `Synergie is a full-stack react app, that allows users to keep track of their favorite shows.
                        Allowing users to plan their binging sessions with their friends.We know that life can be busy, now you can keep track of the
                        shows that you love.`,
      img_url: ``,
      live: "",
      repo: ""
    },
    {
      title: `fwrfgw`,
      description: `just`,
      img_url: ``,
      live: "",
      repo: ""
    },
    {
      title: `fwrdfqd`,
      description: `a`,
      img_url: ``,
      live: "",
      repo: ""
    },
    {
      title: `fwrdgq`,
      description: `mellow`,
      img_url: ``,
      live: "",
      repo: ""
    },
    {
      title: `fwrdgqdefq`,
      description: `fellow`,
      img_url: ``,
      live: "",
      repo: ""
    },
    {
      title: `fwrdgdqqdefq`,
      description: `just`,
      img_url: ``,
      live: "",
      repo: ""
    }
  ];

  return (
    <div className="portfolioPage">
      <div className="inner-frame">
        <div className="flex">
          {projects.map(project => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
