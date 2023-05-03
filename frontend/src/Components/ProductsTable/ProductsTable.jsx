// react
import React, { Children, useEffect, useState } from "react";

// packages
import { AiOutlineDollarCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

// styles
import "./ProductsTable.css";
import "react-toastify/dist/ReactToastify.css";

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
	const [productID, setProductID] = useState(null);

	// side effects
	useEffect(() => {
		fetch(`http://localhost:3000/api/products`)
			.then((res) => res.json())
			.then((products) => setAllProducts(products));
	}, []);

	useEffect(() => {
		getAllProducts();
	}, []);

	// functions
	const DeleteModalCancelAction = () => {
		console.log("مدال کنسل شد");

		setIsShowDeleteModal(false);
	};

	const DeleteModalSubmitAction = () => {
		fetch(`http://localhost:3000/api/products/${productID}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((result) => {
				setIsShowDeleteModal(false);
				showSuccessToast("محصول با موفقیت حذف شد!");
				getAllProducts();
			});
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

	const getAllProducts = () => {
		fetch(`http://localhost:3000/api/products`)
			.then((res) => res.json())
			.then((products) => setAllProducts(products));
	};

	const showSuccessToast = (msg) =>
		toast.success(msg, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

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
									<button
										className='products-table-btn'
										onClick={() => {
											setProductID(product.id);
											setIsShowDeleteModal(true);
										}}>
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
			<ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover theme='light' />
		</>
	);
}

// exports
export default ProductsTable;
