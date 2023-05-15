// react
import React, { useEffect, useState } from "react";

// packages
import { AiOutlinePhone, AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";
import { BiRename, BiLocationPlus } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiLocationArrow1 } from "react-icons/ci";

// styles
import "./Users.css";

// components
import Errorbox from "../Errorbox/Errorbox";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";

// users
function Users() {
	// states
	const [users, setUsers] = useState([]);
	const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
	const [isShowEditModal, setIsShowEditModal] = useState(false);
	const [mainUserID, setMainUserID] = useState(null);

	// side effects
	useEffect(() => getAllUsers(), []);

	// functions
	const getAllUsers = () => {
		fetch(`http://localhost:3000/api/users`)
			.then((res) => res.json())
			.then((users) => setUsers(users));
	};

	const closeDeleteModal = () => setIsShowDeleteModal(false);

	const removeUser = () => {
		fetch(`http://localhost:3000/api/users/${mainUserID}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((result) => {
				getAllUsers();
				setIsShowDeleteModal(false);
			});
	};

	const closeEditModal = () => setIsShowEditModal(false);

	const updateUser = (event) => {
		event.preventDefault();
		console.log("اطلاعات کاربر مورد نظر آپذیت شد!");
		setIsShowEditModal(false);
	};

	return (
		<div>
			{users.length ? (
				<div className='cms-main'>
					<h1 className='cms-title'>لیست کاربران</h1>
					<table className='cms-table'>
						<thead>
							<tr>
								<th>نام و نام خانوادگی</th>
								<th>نام کاربری</th>
								<th>رمز عبور</th>
								<th>شماره تماس</th>
								<th>ایمیل</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr key={user.id}>
									<td>
										{user.firsname} {user.lastname}
									</td>
									<td>{user.username}</td>
									<td>{user.password}</td>
									<td>{user.phone}</td>
									<td>{user.email}</td>
									<td>
										<button
											onClick={() => {
												setIsShowDeleteModal(true);
												setMainUserID(user.id);
											}}>
											حذف
										</button>
										<button>جزئیات</button>
										<button
											onClick={() => {
												setIsShowEditModal(true);
												setMainUserID(user.id);
											}}>
											ویرایش
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<Errorbox msg='هیچ کاربری یافت نشد!' />
			)}
			{isShowDeleteModal && <DeleteModal title='آیا از حذف کاربر اطمینان دارید؟' cancelAction={closeDeleteModal} submitAction={removeUser} />}
			{isShowEditModal && (
				<EditModal onClose={closeEditModal} onSubmit={updateUser}>
					<div className='edit-user-info-input-group'>
						<span>
							<BiRename />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='نام را وارد نمایید' />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<AiOutlineUserAdd />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='نام خانوادگی را وارد نمایید' />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<BsPencilSquare />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='نام کاربری را وارد نمایید' />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<RiLockPasswordLine />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='رمز عبور را وارد نمایید' />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<AiOutlinePhone />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='شماره تماس را وارد نمایید' />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<BiLocationPlus />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='محل زندگی را وارد نمایید' />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<CiLocationArrow1 />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='آدرس را وارد نمایید' />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<AiOutlineStar />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='امتیاز را وارد نمایید' />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<AiOutlineShoppingCart />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='میزان خرید را وارد نمایید' />
					</div>
				</EditModal>
			)}
		</div>
	);
}

// exports
export default Users;
