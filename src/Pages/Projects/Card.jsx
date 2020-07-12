import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.scss";

export const ProjectCard = ({
  project: { title, description, img_url, repo, live },
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
                    <FontAwesomeIcon
                      style={{
                        color: "black",
                        position: "absolute",
                        left: 117,
                        top: 28,
                      }}
                      icon={["fab", "github"]}
                    />{" "}
                    <a
                      href={repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginLeft: 110,
                      }}
                    >
                      Github
                    </a>
                  </div>
                  {title !== "A9 Fashion Design" ? (
                    <a href={live} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        style={{ color: "black" }}
                        // className="fas"
                        icon={["fas", "globe"]}
                      />{" "}
                      Live Site
                    </a>
                  ) : null}
                </div>
                <div className="description">
                  <p>{description}</p>
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
