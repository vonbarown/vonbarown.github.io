import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="external-links">
        <a href="https://github.com/vonbarown">
          <FontAwesomeIcon
            className="fa-icon github"
            icon={["fab", "github"]}
          />
        </a>
        <a href="https://www.linkedin.com/in/vonielbrown/">
          <FontAwesomeIcon
            className="fa-icon linked-in"
            icon={["fab", "linkedin"]}
          />
        </a>
      </div>
    </div>
  );
};
