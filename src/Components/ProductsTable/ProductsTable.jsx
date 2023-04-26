// react
import React from "react";

// packages

// styles

// components

// products table
function ProductsTable() {
	return (
		<div className='products-table'>
			<tr className='products-heading-tr'>
				<th>عکس</th>
				<th>اسم</th>
				<th>قیمت</th>
				<th>موجودی</th>
			</tr>
			<tr>
				<td>
					<img src='/img/oil.jpeg' alt='oil image' className='products-table-img' />
				</td>
				<td>روغن سرخ کردنی</td>
				<td>92000 تومان</td>
				<td>82</td>
				<td>
          <button className="products-table-btn">جزئیات</button>
          <button className="products-table-btn">حذف</button>
          <button className="products-table-btn">ویرایش</button>
        </td>
			</tr>
		</div>
	);
}

// exports
export default ProductsTable;
