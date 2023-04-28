// react
import React from "react";

// packages

// styles

// components
import Errorbox from "../Errorbox/Errorbox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import DetailsModal from "../DetailsModal/DetailsModal";

// products
function Products() {
	return (
		<>
			<Errorbox msg='هیج محصولی یافت نشد!' />
			<AddNewProduct />
			<ProductsTable />
			<DetailsModal />
		</>
	);
}

// exports
export default Products;
