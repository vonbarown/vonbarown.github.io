import React from "react";
// import "./projects.css";
import "./test.scss";

export const ProjectCard = ({ project: { title, description, img_url } }) => {
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
                backgroundImage: `url(${img_url})`
              }}
            >
              <div className="inner">
                <h2>{title}</h2>
                <label for={title} className="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="description">
                  <p>{description}</p>
                </div>
                <label for={title} className="button return" aria-hidden="true">
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
