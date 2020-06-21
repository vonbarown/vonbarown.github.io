import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="external-links">
        <a
          href="https://github.com/vonbarown"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="fa-icon footer-icon github"
            icon={["fab", "github"]}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/vonielbrown/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="fa-icon footer-icon linked-in"
            icon={["fab", "linkedin"]}
          />
        </a>
        <a
          href="https://docs.google.com/document/d/1FVX_MOXaNgtfrqnvRbd7NVDokp8qdrceX7_qwOmFF-g/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="fa-icon footer-icon resume"
            icon={["fas", "file"]}
          >
            <span class="toolTipText">About</span>
          </FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/vonielbrown/"
          target="_blank"
          className="copyright-container"
          rel="noopener noreferrer"
        >
          {" "}
          <FontAwesomeIcon
            className="fa-icon footer-icon copyright"
            icon={["fa", "copyright"]}
          />
          <p style={{ marginTop: "5px" }}>Voniel Brown</p>
        </a>
      </div>
    </div>
  );
};
