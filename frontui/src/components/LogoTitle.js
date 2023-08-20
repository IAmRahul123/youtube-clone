/** @format */

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logos from "../images/utubelogo.png";
import { Link } from "react-router-dom";
const LogoTitle = ({ func }) => {
	const [minimized, setMinimized] = useState(true);

	const handleClick = () => {
		return setMinimized(!minimized, func(minimized));
	};
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				// paddingBottom: "1rem",
				// position: "absolute",
				paddingLeft: "2rem",
				paddingTop: "1rem",
				// bottom: "100px",
				color: "#fff",
				marginBottom: "1rem",
			}}
		>
			<span onClick={() => handleClick()}>
				<MenuIcon />
			</span>

			<Link to="/" style={{ textDecoration: "none" }}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						paddingLeft: "20px",
						fontSize: "20px",
						fontWeight: 450,
						color: "#fff",
					}}
				>
					<img src={Logos} style={{ height: "2rem", paddingRight: "4px" }} />
					YouTube
					<span
						style={{ fontSize: "10px", paddingBottom: "20px", fontWeight: 200 }}
					>
						IN
					</span>
				</div>
			</Link>
		</div>
	);
};

export default LogoTitle;
