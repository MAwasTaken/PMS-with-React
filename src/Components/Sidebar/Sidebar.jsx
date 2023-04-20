// react
import React from "react";

// packages

// styles
import './Sidebar.css'

// components

// sidebar
function Sidebar() {
	return (
		<div className='sidebar'>
			<h1 className='sidebar-title'>به داشبورد خود خوش آمدید</h1>
			<ul className='sidebar-links'>
				<li>
					<a href='#'>صفحه اصلی</a>
				</li>
				<li className="active">
					<a href='#'>محصولات</a>
				</li>
				<li>
					<a href='#'>کامنت ها</a>
				</li>
				<li>
					<a href='#'>کاربران</a>
				</li>
				<li>
					<a href='#'>سفارشات</a>
				</li>
				<li>
					<a href='#'>تخفیف ها</a>
				</li>
			</ul>
		</div>
	);
}

// exports
export default Sidebar;
