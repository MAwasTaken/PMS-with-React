// react
import React, {useEffect} from "react";

// packages

// styles
import "./EditModal.css";

// components

// edit modal
function EditModal({ childeren, onClose, onSubmit }) {
	// side effects
	useEffect(() => {
		const checkKey = (event) => {
			if (event.keyCode === 27) onClose();
		};

		window.addEventListener("keydown", checkKey);

		return () => window.removeEventListener("keydown", checkKey);
	});

  // jsx
	return (
		<div className='modal-parent active'>
			<form className='edit-modal-form'>
				<h1>اطلاعات جدید را وارد نمایید</h1>
				{childeren}
				<button className='edit-form-submit' onClick={onSubmit}>ثبت اطلاعات جدید</button>
			</form>
		</div>
	);
}

// exports
export default EditModal;
