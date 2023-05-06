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
import EditModal from "../EditModal/EditModal";

// comments
function Comments() {
	// states
	const [allComments, setAllComments] = useState([]);
	const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
	const [isShowEditModal, setIsShowEditModal] = useState(false);
	const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
	const [mainCommentBody, setMainCommentBody] = useState("");
	const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
	const [commentID, setCommentID] = useState(null);

	// side effects
	useEffect(() => getAllcomments(), []);

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
		fetch(`http://localhost:3000/api/comments/${commentID}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((result) => {
				showSuccessToast("کامنت با موفقیت حذف شد!");
				getAllcomments();
				closeDeleteModal();
			});
	};

	const getAllcomments = () => {
		fetch(`http://localhost:3000/api/comments`)
			.then((res) => res.json())
			.then((comments) => setAllComments(comments));
	};

	const closeEditModal = () => setIsShowEditModal(false);

	const updateComment = (event) => {
		event.preventDefault();

		fetch(`http://localhost:3000/api/comments/${commentID}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				body: mainCommentBody,
			}),
		}).then((res) => {
			getAllcomments();
			showSuccessToast("کامنت با موفقیت بروزرسانی شد!");
			setIsShowEditModal(false);
		});
	};

	const closeAcceptModal = () => setIsShowAcceptModal(false);

	const acceptComment = () => {
		console.log("کامنت تایید شد");

		setIsShowAcceptModal(false);
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
									<button
										onClick={() => {
											setCommentID(comment.id);
											setIsShowDeleteModal(true);
										}}>
										حذف
									</button>
									<button
										onClick={() => {
											setIsShowEditModal(true);
											setCommentID(comment.id);
											setMainCommentBody(comment.body);
										}}>
										ویرایش
									</button>
									<button>پاسخ</button>
									<button onClick={() => setIsShowAcceptModal(true)}>تایید</button>
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
			{isShowDeleteModal && <DeleteModal cancelAction={closeDeleteModal} submitAction={deleteComment} title={"آیا از حذف کامنت موردنظر اطمینان دارید؟"}></DeleteModal>}
			{isShowEditModal && (
				<EditModal onClose={closeEditModal} onSubmit={updateComment}>
					<textarea value={mainCommentBody} onChange={(event) => setMainCommentBody(event.target.value)} />
				</EditModal>
			)}
			{isShowAcceptModal && <DeleteModal cancelAction={closeAcceptModal} submitAction={acceptComment} title={"آیا از تایید کامنت موردنظر اطمینان دارید؟"}></DeleteModal>}
			<ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover theme='light' />
		</div>
	);
}

// exports
export default Comments;
