import React from "react";
import "./projects.css";
import { ProjectCard } from "./Card";
import synergie_landing from "../../assets/synergie-landing.png";
import portfolio_light from "../../assets/portfolio_light.png";
import portfolio_page from "../../assets/portfolio_page.png";
import A9 from "../../assets/A9.png";

const Projects = ({ darkMode }) => {
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
      title: `A9 Fashion Design`,
      description: `
        Award winning hackathon project (Most Profitable) that focuses on sustainability within the fashion industry.
      
        Indie designers have a limited ways to access reliable and detailed manufacturers. 
        And the manufacturers they do use are not transparent with the materials they use 
        Solution: We offer an easy way to access green manufacturers and see the materials they use.
      `,
      img_url: A9,
      live: `https://github.com/vonbarown/Fashion-Hackathon`,
      repo: `https://github.com/vonbarown/Fashion-Hackathon`,
    },
    {
      title: `Portfolio Site`,
      description: `
        My portfolio site built using react
      `,
      img_url: darkMode ? portfolio_light : portfolio_page,
      live: `https://vonielbrown.com/`,
      repo: `https://github.com/vonbarown/vonbarown.github.io`,
    },
    // {
    //   title: `Student Data Management`,
    //   description: `A web application that for universities to manage student enrollment`,
    //   img_url: darkMode ? portfolio_light : portfolio_page,
    //   live: `https://vonbarown.github.io/Vonbarown-University/index.html`,
    //   repo: `https://github.com/vonbarown/Vonbarown-University`,
    // },

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
