// react
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// packages

// styles
import "./custom.css";

// components
import App from "./App";

// main
ReactDOM.createRoot(document.querySelector("#root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
