// react
import React, { Children, useEffect, useState } from "react";

// packages
import { AiOutlineDollarCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { BiDollar, BiRename, BiCategoryAlt } from "react-icons/bi";
import { BsBag, BsCardImage } from "react-icons/bs";
import { GiRank3 } from "react-icons/gi";
import { MdOutlineSell } from "react-icons/md";

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
	const [mainProductInfos, setMainProductInfos] = useState({});
	const [productNewTitle, setProductNewTitle] = useState("");
	const [productNewPrice, setProductNewPrice] = useState("");
	const [productNewCount, setProductNewCount] = useState("");
	const [productNewImg, setProductNewImg] = useState("");
	const [productNewPopularity, setProductNewPopularity] = useState("");
	const [productNewSale, setProductNewSale] = useState("");
	const [productNewColors, setProductNewColors] = useState("");

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

		const productsNewInfos = {
			title: productNewTitle,
			price: productNewPrice,
			count: productNewCount,
			img: productNewImg,
			popularity: productNewPopularity,
			sale: productNewSale,
			colors: productNewColors,
		};

		fetch(`http://localhost:3000/api/products/${productID}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(productsNewInfos),
		})
			.then((res) => res.json())
			.then((result) => {
        showSuccessToast("محصول با موفقیت ویرایش شد!");
				setIsShowEditModal(false);
				getAllProducts();
			});
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
									<button
										className='products-table-btn'
										onClick={() => {
											setIsShowDetailsModal(true);
											setMainProductInfos(product);
										}}>
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
									<button
										className='products-table-btn'
										onClick={() => {
											setProductID(product.id);

											setProductNewTitle(product.title);
											setProductNewPrice(product.price);
											setProductNewCount(product.count);
											setProductNewImg(product.img);
											setProductNewPopularity(product.popularity);
											setProductNewSale(product.sale);
											setProductNewColors(product.colors);

											setIsShowEditModal(true);
										}}>
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
			{isShowDetailsModal && (
				<DetailsModal onHide={closeDetailsModal}>
					<table className='cms-table'>
						<thead>
							<tr>
								<th>محبوبیت</th>
								<th>فروش</th>
								<th>رنگبندی</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{mainProductInfos.popularity}</td>
								<td>{mainProductInfos.sale.toLocaleString()}</td>
								<td>{mainProductInfos.colors}</td>
							</tr>
						</tbody>
					</table>
				</DetailsModal>
			)}
			{isShowEditModal && (
				<EditModal onClose={() => setIsShowEditModal(false)} onSubmit={updateProductInfos}>
					<div className='edit-products-form-group'>
						<span>
							<BiRename />
						</span>
						<input type='text' placeholder='عنوان جدید را وارد کنید' className='edit-product-input' value={productNewTitle} onChange={(event) => setProductNewTitle(event.target.value)} />
					</div>
					<div className='edit-products-form-group'>
						<span>
							<BiDollar />
						</span>
						<input type='text' placeholder='عنوان جدید را وارد کنید' className='edit-product-input' value={productNewPrice} onChange={(event) => setProductNewPrice(event.target.value)} />
					</div>
					<div className='edit-products-form-group'>
						<span>
							<BsBag />
						</span>
						<input type='text' placeholder='عنوان جدید را وارد کنید' className='edit-product-input' value={productNewCount} onChange={(event) => setProductNewCount(event.target.value)} />
					</div>
					<div className='edit-products-form-group'>
						<span>
							<BsCardImage />
						</span>
						<input type='text' placeholder='عنوان جدید را وارد کنید' className='edit-product-input' value={productNewImg} onChange={(event) => setProductNewImg(event.target.value)} />
					</div>
					<div className='edit-products-form-group'>
						<span>
							<GiRank3 />
						</span>
						<input type='text' placeholder='عنوان جدید را وارد کنید' className='edit-product-input' value={productNewPopularity} onChange={(event) => setProductNewPopularity(event.target.value)} />
					</div>
					<div className='edit-products-form-group'>
						<span>
							<MdOutlineSell />
						</span>
						<input type='text' placeholder='عنوان جدید را وارد کنید' className='edit-product-input' value={productNewSale} onChange={(event) => setProductNewSale(event.target.value)} />
					</div>
					<div className='edit-products-form-group'>
						<span>
							<BiCategoryAlt />
						</span>
						<input type='text' placeholder='عنوان جدید را وارد کنید' className='edit-product-input' value={productNewColors} onChange={(event) => setProductNewColors(event.target.value)} />
					</div>
				</EditModal>
			)}
			<ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover theme='light' />
		</>
	);
}

// exports
export default ProductsTable;
