// react
import React from "react";

// packages

// styles
import "./AddNewProduct.css";

// components
import { BiDollar, BiRename, BiCategoryAlt } from "react-icons/bi";
import { BsBag, BsCardImage } from "react-icons/bs";
import { GiRank3 } from "react-icons/gi";
import { MdOutlineSell } from "react-icons/md";

// add new product
function AddNewProduct() {
  // jsx
	return (
		<div className='products-main'>
			<h1 className='products-title'>افزودن محصول جدید</h1>
			<form action='#' className='add-products-form'>
				<div className='add-products-form-wrap'>
					<div className='add-products-form-group'>
						<BiRename className='add-product-icon' />
						<input type='text' placeholder='اسم محصول را بنویسید' className='add-products-input' />
					</div>
					<div className='add-products-form-group'>
						<BiDollar className='add-product-icon' />
						<input type='text' placeholder='قیمت محصول را بنویسید' className='add-products-input' />
					</div>
					<div className='add-products-form-group'>
						<BsBag className='add-product-icon' />
						<input type='text' placeholder='موجودی محصول را بنویسید' className='add-products-input' />
					</div>
					<div className='add-products-form-group'>
						<BsCardImage className='add-product-icon' />
						<input type='text' placeholder='آدرس عکس محصول را بنویسید' className='add-products-input' />
					</div>
					<div className='add-products-form-group'>
						<GiRank3 className='add-product-icon' />
						<input type='text' placeholder='میزان محبوبیت محصول را بنویسید' className='add-products-input' />
					</div>
					<div className='add-products-form-group'>
						<MdOutlineSell className='add-product-icon' />
						<input type='text' placeholder='میزان فروش محصول را بنویسید' className='add-products-input' />
					</div>
					<div className='add-products-form-group'>
						<BiCategoryAlt className='add-product-icon' />
						<input type='text' placeholder='تعداد رنگ بندی محصول را بنویسید' className='add-products-input' />
					</div>
				</div>
				<button className='add-products-submit'>ثبت محصول</button>
			</form>
		</div>
	);
}

// exports
export default AddNewProduct;
