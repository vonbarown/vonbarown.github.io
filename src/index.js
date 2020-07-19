import dotenv from "dotenv";
import React from "react";
import App from "./Portfolio";
import { render } from "react-snapshot";
dotenv.config();
render(<App />, document.getElementById("root"));

let infoMsg = `Hello there welcome to my personal portfolio`;

const frontEndSkills = [
  "Javascript/ES6",
  "Redux",
  "React",
  "React Native",
  "Typescript",
  "HTML5/CSS3",
];

const backEndSkills = ["Node.js,Express", "PostgreSQL"];

console.info(infoMsg);
console.table({
  "frontend skills": frontEndSkills,
  "backend skills": backEndSkills,
});
