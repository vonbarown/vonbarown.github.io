import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.scss";

export const ProjectCard = ({
  project: { title, description, img_url, repo, live, tech },
}) => {
  return (
    <div className="project-card" key={title} id="project-card">
      <div className="wrapper">
        <div className="card">
          <input
            type="checkbox"
            id={title}
            className="more"
            aria-hidden="true"
          />
          <div className="content">
            <div
              className="front"
              style={{
                backgroundImage: `url(${img_url})`,
              }}
            >
              <div className="inner">
                <h2 id="card-title">{title}</h2>
                {title === "A9 Fashion Design" ? (
                  <span className="toolTipTextParent">
                    <span className="toolTipText " id="awardToolTipText">
                      Awarded Most Profitable
                    </span>
                    <FontAwesomeIcon
                      className="fas award"
                      icon={["fas", "award"]}
                    ></FontAwesomeIcon>
                  </span>
                ) : null}
                <label htmlFor={title} className="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="links">
                  <div>
                    <a href={repo} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={["fab", "github"]}
                        style={{ color: "black" }}
                      />{" "}
                      Github
                    </a>
                  </div>
                  {title !== "A9 Fashion Design" && title !== "Pantry" ? (
                    <a href={live} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        style={{ color: "black" }}
                        icon={["fas", "globe"]}
                      />{" "}
                      Live Site
                    </a>
                  ) : null}
                </div>
                <div className="description">
                  <p>{description}</p>
                  <br />
                  <div className="tech-used">
                    <h6 className="tech-used-heading">Technologies Used</h6>
                    {tech.map((el) => {
                      return <p className="tech">{el}</p>;
                    })}
                  </div>
                </div>
                <label
                  htmlFor={title}
                  className="button return"
                  aria-hidden="true"
                >
                  <FontAwesomeIcon
                    className="fas"
                    icon={["fas", "arrow-left"]}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
