import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "./css/custom.scss";
import App from "./App";

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
