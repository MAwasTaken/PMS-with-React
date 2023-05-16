// react
import React, { useEffect, useState } from "react";

// packages
import { AiOutlinePhone, AiOutlineStar, AiOutlineShoppingCart, AiOutlineMail } from "react-icons/ai";
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
	const [userNewFirstname, setUserNewFirstname] = useState("");
	const [userNewLastname, setUserNewLastname] = useState("");
	const [userNewUsername, setUserNewUsername] = useState("");
	const [userNewPassword, setUserNewPassword] = useState("");
	const [userNewPhone, setUserNewPhone] = useState("");
	const [userNewCity, setUserNewCity] = useState("");
	const [userNewEmail, setUserNewEmail] = useState("");
	const [userNewAddress, setUserNewAddress] = useState("");
	const [userNewPoint, setUserNewPoint] = useState("");
	const [userNewBuy, setUserNewBuy] = useState("");

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
												setUserNewFirstname(user.firsname);
												setUserNewLastname(user.lastname);
												setUserNewUsername(user.username);
												setUserNewPassword(user.password);
												setUserNewPhone(user.phone);
												setUserNewCity(user.city);
												setUserNewEmail(user.email);
												setUserNewAddress(user.address);
												setUserNewPoint(user.score);
												setUserNewBuy(user.buy);
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
						<input type='text' className='edit-user-info-input' placeholder='نام را وارد نمایید' value={userNewFirstname} onChange={(event) => setUserNewFirstname(event.target.value)} />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<AiOutlineUserAdd />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='نام خانوادگی را وارد نمایید' value={userNewLastname} onChange={(event) => setUserNewLastname(event.target.value)} />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<BsPencilSquare />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='نام کاربری را وارد نمایید' value={userNewUsername} onChange={(event) => setUserNewUsername(event.target.value)} />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<RiLockPasswordLine />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='رمز عبور را وارد نمایید' value={userNewPassword} onChange={(event) => setUserNewPassword(event.target.value)} />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<AiOutlinePhone />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='شماره تماس را وارد نمایید' value={userNewPhone} onChange={(event) => setUserNewPhone(event.target.value)} />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<BiLocationPlus />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='محل زندگی را وارد نمایید' value={userNewCity} onChange={(event) => setUserNewCity(event.target.value)} />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<CiLocationArrow1 />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='آدرس را وارد نمایید' value={userNewAddress} onChange={(event) => setUserNewAddress(event.target.value)} />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<AiOutlineMail />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='ایمیل را وارد نمایید' value={userNewEmail} onChange={(event) => setUserNewEmail(event.target.value)} />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<AiOutlineStar />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='امتیاز را وارد نمایید' value={userNewPoint} onChange={(event) => setUserNewPoint(event.target.value)} />
					</div>
					<div className='edit-user-info-input-group'>
						<span>
							<AiOutlineShoppingCart />
						</span>
						<input type='text' className='edit-user-info-input' placeholder='میزان خرید را وارد نمایید' value={userNewBuy} onChange={(event) => setUserNewBuy(event.target.value)} />
					</div>
				</EditModal>
			)}
		</div>
	);
}

// exports
export default Users;
