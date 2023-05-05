// react
import React, { useEffect, useState } from "react";

// packages
import { ToastContainer, toast } from "react-toastify";

// styles
import "./Comments.css";

// components
import Errorbox from "../Errorbox/Errorbox";
import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";

// comments
function Comments() {
	// states
	const [allComments, setAllComments] = useState([]);
	const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
	const [mainCommentBody, setMainCommentBody] = useState("");
	const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

	// side effects
	useEffect(() => {
		fetch(`http://localhost:3000/api/comments`)
			.then((res) => res.json())
			.then((comments) => setAllComments(comments));
	}, []);

	// functions
	const showSuccessToast = (msg) =>
		toast.success(msg, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

	const closeDetailModal = () => setIsShowDetailsModal(false);

	const closeDeleteModal = () => setIsShowDeleteModal(false);

	const deleteComment = () => {
		console.log("کامنت با موفقیا شیب");

		showSuccessToast("کامنت با موفقیت حذف شد!");
		closeDeleteModal();
	};

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
									<button
										onClick={() => {
											setIsShowDetailsModal(true);
											setMainCommentBody(comment.body);
										}}>
										دیدن متن
									</button>
								</td>
								<td>{comment.date}</td>
								<td>{comment.hour}</td>
								<td>
									<button onClick={() => setIsShowDeleteModal(true)}>حذف</button>
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
			{isShowDetailsModal && (
				<DetailsModal onHide={closeDetailModal}>
					<p className='text-modal'>{mainCommentBody}</p>
					<button className='text-modal-close-btn' onClick={() => closeDetailModal()}>
						بستن
					</button>
				</DetailsModal>
			)}
			{isShowDeleteModal && <DeleteModal cancelAction={closeDeleteModal} submitAction={deleteComment}></DeleteModal>}
			<ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover theme='light' />
		</div>
	);
}

// exports
export default Comments;
