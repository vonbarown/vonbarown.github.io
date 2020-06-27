import dotenv from "dotenv";
import React from "react";
import App from "./App";
import { render } from "react-snapshot";
dotenv.config();
render(<App />, document.getElementById("root"));

let infoMsg = `Hello there welcome to my personal portfolio`;

console.info(infoMsg);
