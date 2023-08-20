/** @format */

import React from "react";
import "./NewComments.css";
const NewComment = () => {
	return (
		<div>
			<div className="comment-container">
				<img
					className="user-image"
					src="https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
				/>
				<input placeholder="Add a Comment" />
			</div>
		</div>
	);
};

export default NewComment;
