// react
import React, { useState } from "react";

// packages

// styles
import "./ProductsTable.css";

// components
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";

// products table
function ProductsTable() {
	// states
	const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
	const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);

	// functions
	const DeleteModalCancelAction = () => {
		console.log("مدال کنسل شد");

		setIsShowDeleteModal(false);
	};

	const DeleteModalSubmitAction = () => {
		console.log("مدال تایید شد");

		setIsShowDeleteModal(false);
	};

	const closeDetailsModal = () => {
		setIsShowDetailsModal(false);

    console.log('مدال جزئیات بسته شد');
	};

	return (
		<>
			<table className='products-table'>
				<thead>
					<tr className='products-heading-tr'>
						<th>عکس</th>
						<th>اسم</th>
						<th>قیمت</th>
						<th>موجودی</th>
					</tr>
				</thead>
				<tbody>
					<tr className='products-table-tr'>
						<td>
							<img src='/img/oil.jpeg' alt='oil image' className='products-table-img' />
						</td>
						<td>روغن سرخ کردنی</td>
						<td>92000 تومان</td>
						<td>82</td>
						<td>
							<button className='products-table-btn' onClick={() => setIsShowDetailsModal(true)}>
								جزئیات
							</button>
							<button className='products-table-btn' onClick={() => setIsShowDeleteModal(true)}>
								حذف
							</button>
							<button className='products-table-btn'>ویرایش</button>
						</td>
					</tr>
				</tbody>
			</table>
			{isShowDeleteModal && <DeleteModal submitAction={DeleteModalSubmitAction} cancelAction={DeleteModalCancelAction} />}
			{isShowDetailsModal && <DetailsModal onHide={closeDetailsModal} />}
		</>
	);
}

// exports
export default ProductsTable;
