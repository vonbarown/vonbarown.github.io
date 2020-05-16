import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="external-links">
        <a href="https://github.com/vonbarown" target="_blank">
          <FontAwesomeIcon
            className="fa-icon github"
            icon={["fab", "github"]}
          />
        </a>
        <a href="https://www.linkedin.com/in/vonielbrown/" target="_blank">
          <FontAwesomeIcon
            className="fa-icon linked-in"
            icon={["fab", "linkedin"]}
          />
        </a>
        <div className="copyright-container">
          {" "}
          <FontAwesomeIcon
            className="fa-icon copyright"
            icon={["fa", "copyright"]}
          />
          <p style={{ marginTop: "13px" }}>Voniel Brown</p>
        </div>
      </div>
    </div>
  );
};
