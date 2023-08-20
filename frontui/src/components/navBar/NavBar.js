/** @format */

import React, { useEffect, useRef, useState } from "react";
import "./navBar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MicIcon from "@mui/icons-material/Mic";
import { Scale } from "@mui/icons-material";
const NavBar = () => {
	const [show, setShow] = useState(false);

	const onFocus = () => setShow(true);
	const onBlur = () => setShow(false);

	// const ref = useRef(null);

	// useEffect(() => {
	// 	checkingFocus();
	// }, [ref]);

	// const checkingFocus = () => {
	// 	if (ref.current === document.activeElement) {
	// 		console.log("element has focus", ref.current);
	// 		return setShow(true);
	// 	} else {
	// 		console.log("element does NOT have focus", document.activeElement);
	// 		return setShow(false);
	// 	}
	// };

	return (
		<div className="mainContainer">
			<div className="allchanges">
				<div className="container">
					{show && <SearchOutlinedIcon className="inner-search-icon" />}
					<input
						placeholder="Search"
						type="text"
						onFocus={onFocus}
						onBlur={onBlur}
						style={{ paddingLeft: !show ? "0.7rem" : "3rem" }}
					/>
					<button className="btnSearch">
						<SearchOutlinedIcon style={{ color: "#fff" }} />
					</button>
					<div className="micIcon">
						<MicIcon style={{ color: "#fff" }} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
