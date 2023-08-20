/** @format */

import React from "react";
import Nav from "./Nav";
import Body from "./Body";
import DrawerNav from "./Drawer";

const Home = () => {
	return (
		<div className="body">
			<div className="navBar">
				<Nav />
			</div>
			<div className="drawer">
				<DrawerNav />
			</div>
			<div className="body">
				<Body />
			</div>
		</div>
	);
};

export default Home;
