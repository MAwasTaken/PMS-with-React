// react
import React from "react";
import { useRoutes } from "react-router-dom";

// packages

// styles
import "./App.css";

// components
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import routes from "./routes";

// app
function App() {
	// router
	const router = useRoutes(routes);

	// jsx
	return (
		<>
			<Sidebar />
			<div className='main'>
				<Header />
				{router}
			</div>
		</>
	);
}

// exports
export default App;
