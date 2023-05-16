// react
import React from "react";
import { NavLink } from "react-router-dom";

// packages
import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail, BiDollar } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";

// styles
import "./Sidebar.css";

// components

// sidebar
function Sidebar() {
	// jsx
	return (
		<div className='sidebar'>
			<h1 className='sidebar-title'>به داشبورد خود خوش آمدید</h1>
			<ul className='sidebar-links'>
				<NavLink to='/'>
					<AiOutlineHome className='icon' />
					صفحه اصلی
				</NavLink>
				<NavLink to='/products'>
					<MdProductionQuantityLimits className='icon' />
					محصولات
				</NavLink>
				<NavLink to='/comments'>
					<BiCommentDetail className='icon' />
					کامنت ها
				</NavLink>
				<NavLink to='/users'>
					<FiUsers className='icon' />
					کاربران
				</NavLink>
				<NavLink to='/orders'>
					<BsBagCheck className='icon' />
					سفارشات
				</NavLink>
				<NavLink to='/offs'>
					<BiDollar className='icon' />
					تخفیف ها
				</NavLink>
			</ul>
		</div>
	);
}

// exports
export default Sidebar;
