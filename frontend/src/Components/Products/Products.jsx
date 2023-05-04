// react
import React, { useState, useEffect } from "react";

// packages
import { toast } from "react-toastify";

// styles

// components
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

// products
function Products() {
	// states
	const [allProducts, setAllProducts] = useState([]);

	// functions
	const getAllProducts = () => {
		fetch(`http://localhost:3000/api/products`)
			.then((res) => res.json())
			.then((products) => setAllProducts(products.reverse()));
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

	// side effects
	useEffect(() => {
		getAllProducts();
	}, []);

	// jsx
	return (
		<>
			<AddNewProduct getAllProducts={getAllProducts} showSuccessToast={showSuccessToast} />
			<ProductsTable allProducts={allProducts} getAllProducts={getAllProducts} showSuccessToast={showSuccessToast} />
		</>
	);
}

// exports
export default Products;
