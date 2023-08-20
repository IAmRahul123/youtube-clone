/** @format */

import React from "react";
import { BiVideoPlus } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

import "./Icons.css";
const Icons = () => {
	return (
		<div className="mainCont">
			<div className="spaceIcon">
				<div className="setIcon">
					<div className="icon">
						<BiVideoPlus size={30} />
					</div>
					<div className="icon">
						<IoMdNotificationsOutline size={30} />
					</div>
					<div className="User">A</div>
				</div>
			</div>
		</div>
	);
};

export default Icons;
