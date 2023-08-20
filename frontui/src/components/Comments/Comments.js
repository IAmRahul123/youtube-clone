/** @format */

import React from "react";
import "./Comments.css";
const Comments = () => {
	return (
		<div className="one-comment">
			<img
				className="user-image"
				src="https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
			/>
			<div className="comment-containers">
				<div className="detail-data">
					<span className="user-name">John Doe</span>
					<span className="active-time">2 days ago</span>
				</div>
				<div className="comment">
					Qui incididunt occaecat amet elit sit veniam minim laborum laboris
					irure dolore minim. Occaecat ut sit dolore fugiat ex. Irure aute anim
					sit ullamco reprehenderit tempor elit laboris. Id ea do cillum eiusmod
					commodo proident ut duis do ex ipsum minim aliquip. Et incididunt
					laborum aliquip cillum. Culpa in deserunt voluptate incididunt culpa
					eiusmod ea dolor cupidatat commodo.
				</div>
			</div>
		</div>
	);
};

export default Comments;
