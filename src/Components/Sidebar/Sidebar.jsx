// react
import React from "react";
import { Link } from "react-router-dom";

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
	return (
		<div className='sidebar'>
			<h1 className='sidebar-title'>به داشبورد خود خوش آمدید</h1>
			<ul className='sidebar-links'>
				<li>
					<Link href='#' to="/products">
						<AiOutlineHome className='icon' />
						صفحه اصلی
					</Link>
				</li>
				<li className='active'>
					<Link href='#' to="/products">
						<MdProductionQuantityLimits className='icon' />
						محصولات
					</Link>
				</li>
				<li>
					<Link href='#' to="/comments">
						<BiCommentDetail className='icon' />
						کامنت ها
					</Link>
				</li>
				<li>
					<Link href='#' to="/users">
						<FiUsers className='icon' />
						کاربران
					</Link>
				</li>
				<li>
					<Link href='#' to="/orders">
						<BsBagCheck className='icon' />
						سفارشات
					</Link>
				</li>
				<li>
					<Link href='#' to="/offs">
						<BiDollar className='icon' />
						تخفیف ها
					</Link>
				</li>
			</ul>
		</div>
	);
}

// exports
export default Sidebar;
