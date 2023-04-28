// react
import React from "react";
import { createPortal } from "react-dom";

// packages

// styles
import "./DeleteModal.css";

// components

// delete modal
function DeleteModal({ submitAction, cancelAction }) {
	return createPortal(
		<div className='modal-parent active'>
			<div className='delete-modal'>
				<h1>آیا از حذف اطمینان دارید؟</h1>
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
