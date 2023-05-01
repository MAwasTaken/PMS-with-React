// react
import React from "react";

// packages

// styles

// components
import Errorbox from "../Errorbox/Errorbox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

// products
function Products() {
  // jsx
	return (
		<>
			<AddNewProduct />
			<ProductsTable />
		</>
	);
}

// exports
export default Products;
