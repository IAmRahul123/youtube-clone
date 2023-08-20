/** @format */

import React, { useState, useEffect } from "react";
import DrawerNav from "./DrawerNav";
import "./Home.css";
import LogoTitle from "./LogoTitle";
import SmallDrawer from "./SmallDrawer/SmallDrawer";
const Home = () => {
	const [showDrawer, setShowDrawer] = useState(false);
	const showComp = (e) => {
		e == true || undefined ? setShowDrawer(false) : setShowDrawer(true);
		console.log("show drawer called");
	};
	useEffect(() => {
		showComp();
	}, []);

	return (
		<div className="MainContainerHome">
			<div className="FullDrawer">
				<div className="titles">
					<LogoTitle func={showComp} />
				</div>
				<div style={{ position: "sticky", top: 0 }}>
					{showDrawer == true ? (
						<div className="main">
							<DrawerNav />
							{console.log("fullDrawer")}
						</div>
					) : (
						<div className="sm-main">
							<SmallDrawer />
							{console.log("smallDrawer")}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
