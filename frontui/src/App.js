/** @format */

import React from "react";
import Home from "./components/Home";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Video from "./components/Video";
import Body from "./components/Body";
import NavBar from "./components/navBar/NavBar";
import Test from "./components/navBar/test";
import SignIn from "./components/SignIn/SignIn";
const App = () => {
	return (
		<div>
			<Router>
				<div style={{ display: "flex" }}>
					<div style={{ display: "flex", flex: 1 }}>
						<Home />
					</div>
					<div style={{ flex: 7, backgroundColor: "#181818" }}>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								borderBottom: "0.5px solid #373737",
								position: "sticky",
								top: 0,
							}}
						>
							<NavBar />
							<Test />
						</div>
						<Routes>
							<Route path="/">
								<Route index element={<Body type="random" />} />
								<Route path="trends" element={<Body type="trend" />} />
								<Route path="subscriptions" element={<Body type="sub" />} />

								<Route path="video">
									<Route path=":id" element={<Video />} />
								</Route>
								<Route>
									<Route path="/signIn" element={<SignIn />} />
								</Route>
							</Route>
						</Routes>
					</div>
				</div>
			</Router>
		</div>
	);
};

export default App;
