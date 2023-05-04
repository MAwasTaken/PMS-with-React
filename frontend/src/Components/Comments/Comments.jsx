// react
import React, { useEffect, useState } from "react";

// packages

// styles
import "./Comments.css";

// components
import Errorbox from "../Errorbox/Errorbox";

// comments
function Comments() {
	// states
	const [allComments, setAllComments] = useState([]);

	// side effects
	useEffect(() => {
		fetch(`http://localhost:3000/api/comments`)
			.then((res) => res.json())
			.then((comments) => setAllComments(comments));
	}, []);

	// jsx
	return (
		<div className='cms-main'>
			{allComments.length ? (
				<table className='cms-table'>
					<thead>
						<tr>
							<th>نام کاربر</th>
							<th>محصول</th>
							<th>کامنت</th>
							<th>تاریخ ثبت</th>
							<th>ساعت</th>
						</tr>
					</thead>
					<tbody>
						{allComments.map((comment) => (
							<tr key={comment.id}>
								<td>{comment.userID}</td>
								<td>{comment.productID}</td>
								<td>
									<button>دیدن متن</button>
								</td>
								<td>{comment.date}</td>
								<td>{comment.hour}</td>
								<td>
									<button>حذف</button>
									<button>ویرایش</button>
									<button>پاسخ</button>
									<button>تایید</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<Errorbox msg='هیچ کامنتی یافت نشد!' />
			)}
		</div>
	);
}

// exports
export default Comments;
