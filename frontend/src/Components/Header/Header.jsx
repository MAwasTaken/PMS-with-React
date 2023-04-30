// react
import React from "react";

// packages
import { AiOutlineBell } from "react-icons/ai";
import { BsBrightnessHigh } from "react-icons/bs";

// styles
import "./Header.css";

// components

// header
function Header() {
	return (
		<div className='header'>
			<div className='admin-profile'>
				<img src='./img/sasan.avif' alt='admin profile' />
				<div>
					<h1>مهدی عبداللهی</h1>
					<h3>برنامه نویس فرانت اند</h3>
				</div>
			</div>
			<div className='header-left-section'>
				<div className='search-box'>
					<input type='text' placeholder='جستجو بکنید...' />
					<button>جستجو</button>
				</div>
				<button className='header-left-icon'>
					<AiOutlineBell />
				</button>
				<button className='header-left-icon'>
					<BsBrightnessHigh />
				</button>
			</div>
		</div>
	);
}

// exports
export default Header;
