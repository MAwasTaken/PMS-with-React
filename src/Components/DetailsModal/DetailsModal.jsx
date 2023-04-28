// react
import React, { useEffect } from "react";

// packages

// styles
import "./DetailsModal.css";

// components

// details modal
function DetailsModal({ onHide }) {
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
			<div className='details-modal'>
				<table className='cms-table'>
					<thead>
						<tr>
							<th>اسم</th>
							<th>قیمت</th>
							<th>محبوبیت</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>لپتاپ</td>
							<td>12,000,000</td>
							<td>91</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

// exports
export default DetailsModal;
