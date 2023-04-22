// react
import React from "react";

// packages

// styles
import "./Errorbox.css";

// components

// error box
function Errorbox({ msg }) {
	return (
		<div className="cms-empty-error">
			<h1>{msg}</h1>
		</div>
	);
}

// exports
export default Errorbox;
