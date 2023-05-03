// react
import React, { useEffect } from "react";

// packages

// styles
import "./DetailsModal.css";

// components

// details modal
function DetailsModal({ onHide, children }) {
	// side effects
	useEffect(() => {
		const checkKey = (event) => {
			if (event.keyCode === 27) onHide();
		};

		window.addEventListener("keydown", checkKey);

		return () => window.removeEventListener("keydown", checkKey);
	});

	// jsx
	return (
		<div className=' modal-parent active'>
			<div className='details-modal'>{children}</div>
		</div>
	);
}

// exports
export default DetailsModal;
