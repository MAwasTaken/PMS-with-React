// react
import React from "react";

// packages

// styles
import './App.css'

// components
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";

// app
function App() {
	return (
		<>
			<Sidebar />
			<div className='main'>
				<Header />
        {/* routes */}
			</div>
		</>
	);
}

// exports
export default App;
