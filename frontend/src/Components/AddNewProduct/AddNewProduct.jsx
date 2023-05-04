// react
import React, { useState } from "react";

// packages
import { ToastContainer } from "react-toastify";

// styles
import "./AddNewProduct.css";

// components
import { BiDollar, BiRename, BiCategoryAlt } from "react-icons/bi";
import { BsBag, BsCardImage } from "react-icons/bs";
import { GiRank3 } from "react-icons/gi";
import { MdOutlineSell } from "react-icons/md";

// add new product
function AddNewProduct({ getAllProducts, showSuccessToast }) {
	// states
	const [newProductTitle, setNewProductTitle] = useState("");
	const [newProductPrice, setNewProductPrice] = useState("");
	const [newProductCount, setNewProductCount] = useState("");
	const [newProductImg, setNewProductImg] = useState("");
	const [newProductPopularity, setNewProductPopularity] = useState("");
	const [newProductSale, setNewProductSale] = useState("");
	const [newProductColors, setNewProductColors] = useState("");

	// functions
	const addNewProduct = (event) => {
		event.preventDefault();

		const newProductInfos = {
			title: newProductTitle,
			price: newProductPrice,
			count: newProductCount,
			img: newProductImg,
			popularity: newProductPopularity,
			sale: newProductSale,
			colors: newProductColors,
		};

		fetch(`http://localhost:3000/api/products`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProductInfos),
		}).then((res) => {
      showSuccessToast('محصول با موفقیت اضافه شد!')
			getAllProducts();
			emptyInputs();
		});
	};

	const emptyInputs = () => {
		setNewProductTitle("");
		setNewProductPrice("");
		setNewProductCount("");
		setNewProductImg("");
		setNewProductPopularity("");
		setNewProductSale("");
		setNewProductColors("");
	};

	// jsx
	return (
		<div className='products-main'>
			<h1 className='products-title'>افزودن محصول جدید</h1>
			<form action='#' className='add-products-form'>
				<div className='add-products-form-wrap'>
					<div className='add-products-form-group'>
						<BiRename className='add-product-icon' />
						<input type='text' placeholder='اسم محصول را بنویسید' className='add-products-input' value={newProductTitle} onChange={(event) => setNewProductTitle(event.target.value)} />
					</div>
					<div className='add-products-form-group'>
						<BiDollar className='add-product-icon' />
						<input type='text' placeholder='قیمت محصول را بنویسید' className='add-products-input' value={newProductPrice} onChange={(event) => setNewProductPrice(event.target.value)} />
					</div>
					<div className='add-products-form-group'>
						<BsBag className='add-product-icon' />
						<input type='text' placeholder='موجودی محصول را بنویسید' className='add-products-input' value={newProductCount} onChange={(event) => setNewProductCount(event.target.value)} />
					</div>
					<div className='add-products-form-group'>
						<BsCardImage className='add-product-icon' />
						<input type='text' placeholder='آدرس عکس محصول را بنویسید' className='add-products-input' value={newProductImg} onChange={(event) => setNewProductImg(event.target.value)} />
					</div>
					<div className='add-products-form-group'>
						<GiRank3 className='add-product-icon' />
						<input type='text' placeholder='میزان محبوبیت محصول را بنویسید' className='add-products-input' value={newProductPopularity} onChange={(event) => setNewProductPopularity(event.target.value)} />
					</div>
					<div className='add-products-form-group'>
						<MdOutlineSell className='add-product-icon' />
						<input type='text' placeholder='میزان فروش محصول را بنویسید' className='add-products-input' value={newProductSale} onChange={(event) => setNewProductSale(event.target.value)} />
					</div>
					<div className='add-products-form-group'>
						<BiCategoryAlt className='add-product-icon' />
						<input type='text' placeholder='تعداد رنگ بندی محصول را بنویسید' className='add-products-input' value={newProductColors} onChange={(event) => setNewProductColors(event.target.value)} />
					</div>
				</div>
				<button className='add-products-submit' onClick={addNewProduct}>
					ثبت محصول
				</button>
			</form>
			<ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover theme='light' />
		</div>
	);
}

// exports
export default AddNewProduct;
