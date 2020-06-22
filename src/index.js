import dotenv from "dotenv";
import React from "react";
import App from "./App";
import { render } from "react-snapshot";
dotenv.config();
render(<App />, document.getElementById("root"));
