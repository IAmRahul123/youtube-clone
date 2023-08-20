/** @format */

import React from "react";
import "./SmallDrawer.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
const SmallDrawer = () => {
	return (
		<div className="sm-drawer-container">
			<div className="itemView">
				<HomeIcon />
			</div>
			<div className="itemView">
				<ExploreIcon />
			</div>
			<div className="itemView">
				<SubscriptionsIcon />
			</div>
			<div className="itemView">
				<VideoLibraryIcon />
			</div>
			<div className="itemView">
				<HistoryIcon />
			</div>
		</div>
	);
};

export default SmallDrawer;
