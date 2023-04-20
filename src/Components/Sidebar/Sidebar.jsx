// react
import React from "react";

// packages

// styles
import "./Sidebar.css";

// components
import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail, BiDollar } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";

// sidebar
function Sidebar() {
	return (
		<div className='sidebar'>
			<h1 className='sidebar-title'>به داشبورد خود خوش آمدید</h1>
			<ul className='sidebar-links'>
				<li>
					<a href='#'>
						<AiOutlineHome className='icon' />
						صفحه اصلی
					</a>
				</li>
				<li className='active'>
					<a href='#'>
						<MdProductionQuantityLimits className='icon' />
						محصولات
					</a>
				</li>
				<li>
					<a href='#'>
						<BiCommentDetail className='icon' />
						کامنت ها
					</a>
				</li>
				<li>
					<a href='#'>
						<FiUsers className='icon' />
						کاربران
					</a>
				</li>
				<li>
					<a href='#'>
						<BsBagCheck className='icon' />
						سفارشات
					</a>
				</li>
				<li>
					<a href='#'>
						<BiDollar className='icon' />
						تخفیف ها
					</a>
				</li>
			</ul>
		</div>
	);
}

// exports
export default Sidebar;
