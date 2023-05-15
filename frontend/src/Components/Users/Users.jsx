// react
import React, { useEffect, useState } from "react";

// packages

// styles
import "./Users.css";

// components
import Errorbox from "../Errorbox/Errorbox";
import DeleteModal from "../DeleteModal/DeleteModal";

// users
function Users() {
	// states
	const [users, setUsers] = useState([]);
	const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
	const [mainUserID, setMainUserID] = useState(null);

	// side effects
	useEffect(() => getAllUsers(), []);

	// functions
	const getAllUsers = () => {
		fetch(`http://localhost:3000/api/users`)
			.then((res) => res.json())
			.then((users) => setUsers(users));
	};

	const closeDeleteModal = () => {
		setIsShowDeleteModal(false);
	};

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
										<button>ویرایش</button>
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
		</div>
	);
}

// exports
export default Users;
