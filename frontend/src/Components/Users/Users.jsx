// react
import React, { useEffect, useState } from "react";

// packages

// styles
import "./Users.css";

// components
import Errorbox from "../Errorbox/Errorbox";

// users
function Users() {
	// states
	const [users, setUsers] = useState([]);

	// side effects
	useEffect(() => {
		fetch(`http://localhost:3000/api/users`)
			.then((res) => res.json())
			.then((users) => setUsers(users));
	}, []);

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
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<Errorbox msg='هیچ کاربری یافت نشد!' />
			)}
		</div>
	);
}

// exports
export default Users;
