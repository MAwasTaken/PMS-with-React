// react
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

// packages

// styles
import "./DeleteModal.css";

// components

// delete modal
function DeleteModal({ submitAction, cancelAction, title }) {
	// side effects
	useEffect(() => {
		const checkKey = (event) => {
			if (event.keyCode === 27) cancelAction();
		};

		window.addEventListener("keydown", checkKey);

		return () => window.removeEventListener("keydown", checkKey);
	});

	// jsx
	return createPortal(
		<div className='modal-parent active'>
			<div className='delete-modal'>
				<h1>{title}</h1>
				<div className='delete-modal-btns'>
					<button className='delete-btn delete-modal-accept-btn' onClick={() => submitAction()}>
						بله
					</button>
					<button className='delete-btn delete-modal-reject-btn' onClick={() => cancelAction()}>
						خیر
					</button>
				</div>
			</div>
		</div>,
		document.querySelector("#modals-parent")
	);
}

// exports
export default DeleteModal;
