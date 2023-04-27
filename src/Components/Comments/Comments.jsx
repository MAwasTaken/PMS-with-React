// react
import React from "react";

// packages

// styles

// components
import Errorbox from "../Errorbox/Errorbox";
import DeleteModal from "../DeleteModal/DeleteModal";

// comments
function Comments() {
	return (
		<>
			<Errorbox msg='هیچ کامنتی یافت نشد!' />
			<DeleteModal />
		</>
	);
}

// exports
export default Comments;
