/** @format */

import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./Nav.css";
import logo from "../images/logoYoutube.png";
import Search from "../subcomponents/Search";
import Icons from "../subcomponents/Icons";
const Nav = () => {
	return (
		<div className="mainContainer">
			<div className="container">
				<div className="">
					<AiOutlineMenu size={25} />
				</div>
				<div className="imgStyle">
					<img src={logo} />
				</div>
				<div className="middle">
					<div className="searchView">
						<Search />
					</div>
				</div>
				<div className="iconView">
					<Icons />
				</div>
			</div>
		</div>
	);
};

export default Nav;
