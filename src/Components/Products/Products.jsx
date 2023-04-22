// react
import React from "react";

// packages

// styles

// components
import Errorbox from "../Errorbox/Errorbox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";

// products
function Products() {
	return (
		<>
			<Errorbox msg='هیج محصولی یافت نشد!' />
			<AddNewProduct />
		</>
	);
}

// exports
export default Products;
