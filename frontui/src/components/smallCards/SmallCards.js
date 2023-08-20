/** @format */

import React from "react";
import "./SmallCards.css";
const SmallCards = () => {
	return (
		<div className="sm-card-container">
			<div className="sm-img-container">
				<img
					className="sm-Image"
					src="https://miro.medium.com/max/775/0*rZecOAy_WVr16810"
				/>
			</div>
			<div className="video-details">
				<div className="title">Title of video</div>
				<div className="info-Video">Creator</div>
				<div className="views">660,908 view . 1 day ago</div>
			</div>
		</div>
	);
};

export default SmallCards;
