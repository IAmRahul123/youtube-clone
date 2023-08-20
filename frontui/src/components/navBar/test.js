/** @format */

import React from "react";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import "./Test.css";
const Test = () => {
	return (
		<div>
			<div className="allIcons">
				<VideoCallOutlinedIcon
					style={{ height: 28, width: 28, color: "#fff" }}
				/>
				<NotificationsNoneOutlinedIcon
					style={{ height: 28, width: 28, color: "#fff" }}
				/>
				<span className="user">A</span>
			</div>
		</div>
	);
};

export default Test;
