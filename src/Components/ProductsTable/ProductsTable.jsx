// react
import React, { useState } from "react";

// packages

// styles
import "./ProductsTable.css";

// components
import DeleteModal from "../DeleteModal/DeleteModal";

// products table
function ProductsTable() {
	// states
	const [isShowModal, setIsShowModal] = useState(false);

	// functions
	const DeleteModalCancelAction = () => {
		console.log("مدال کنسل شد");

		setIsShowModal(false);
	};

	const DeleteModalSubmitAction = () => {
		console.log("مدال تایید شد");

		setIsShowModal(false);
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
							<button className='products-table-btn'>جزئیات</button>
							<button className='products-table-btn' onClick={() => setIsShowModal(true)}>
								حذف
							</button>
							<button className='products-table-btn'>ویرایش</button>
						</td>
					</tr>
				</tbody>
			</table>
			{isShowModal && <DeleteModal submitAction={DeleteModalSubmitAction} cancelAction={DeleteModalCancelAction} />}
		</>
	);
}

// exports
export default ProductsTable;
