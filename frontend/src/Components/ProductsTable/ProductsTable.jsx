// react
import React, { Children, useEffect, useState } from "react";

// packages
import { AiOutlineDollarCircle } from "react-icons/ai";

// styles
import "./ProductsTable.css";

// components
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import Errorbox from "../Errorbox/Errorbox";

// products table
function ProductsTable() {
	// states
	const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
	const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
	const [isShowEditModal, setIsShowEditModal] = useState(false);
	const [allProducts, setAllProducts] = useState([]);

	// side effects
	useEffect(() => {
		fetch(`http://localhost:3000/api/products`).then((res) => res.json())
		.then((products) => setAllProducts(products));
	}, []);

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

		console.log("مدال جزئیات بسته شد");
	};

	const updateProductInfos = (event) => {
		event.preventDefault();
		console.log("محصول ویرایش شد");
		setIsShowEditModal(false);
	};

	// jsx
	return (
		<>
			{allProducts.length ? (
				<table className='products-table'>
					<thead>
						<tr className='products-heading-tr'>
							<th>عکس</th>
							<th>اسم</th>
							<th>قیمت</th>
							<th>موجودی</th>
						</tr>
					</thead>
					{allProducts.map((product) => (
						<tbody key={product.id}>
							<tr className='products-table-tr'>
								<td>
									<img src={product.img} alt='oil image' className='products-table-img' />
								</td>
								<td>{product.title}</td>
								<td>{product.price} تومان</td>
								<td>{product.sale}</td>
								<td>
									<button className='products-table-btn' onClick={() => setIsShowDetailsModal(true)}>
										جزئیات
									</button>
									<button className='products-table-btn' onClick={() => setIsShowDeleteModal(true)}>
										حذف
									</button>
									<button className='products-table-btn' onClick={() => setIsShowEditModal(true)}>
										ویرایش
									</button>
								</td>
							</tr>
						</tbody>
					))}
				</table>
			) : (
				<Errorbox msg='هیج محصولی یافت نشد!' />
			)}
			{isShowDeleteModal && <DeleteModal submitAction={DeleteModalSubmitAction} cancelAction={DeleteModalCancelAction} />}
			{isShowDetailsModal && <DetailsModal onHide={closeDetailsModal} />}
			{isShowEditModal && (
				<EditModal onClose={() => setIsShowEditModal(false)} onSubmit={updateProductInfos}>
					<div className='edit-products-form-group p'>
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input type='text' placeholder='عنوان جدید را وارد کنید' className='edit-product-input' />
					</div>
					<div className='edit-products-form-group p'>
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input type='text' placeholder='عنوان جدید را وارد کنید' className='edit-product-input' />
					</div>
					<div className='edit-products-form-group p'>
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input type='text' placeholder='عنوان جدید را وارد کنید' className='edit-product-input' />
					</div>
					<div className='edit-products-form-group p'>
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input type='text' placeholder='عنوان جدید را وارد کنید' className='edit-product-input' />
					</div>
				</EditModal>
			)}
		</>
	);
}

// exports
export default ProductsTable;
