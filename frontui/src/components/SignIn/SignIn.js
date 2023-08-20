/** @format */

import React from "react";
import "./SignIn.css";
const SignIn = () => {
	return (
		<div className="signin-outer-container">
			<div className="signin-inner-container">
				<div className="heading">
					<div>Sign In</div>
					<div>to continue to YouTube</div>
				</div>
				<div className="signin-container">
					<div>
						<input placeholder="Username" />
						<input placeholder="Password" type={"password"} />
					</div>
					<button className="button">
						<span>Sign In</span>
					</button>
				</div>
				<div className="or">Or</div>
				<div className="signin-container">
					<div>
						<input placeholder="Username" />
						<input placeholder="Email" type={"email"} />
						<input placeholder="Password" type={"password"} />
					</div>
					<button className="button">
						<span>Sign Up</span>
					</button>
				</div>
			</div>
			<div className="extra">
				{/* <div>English(USA)</div> */}

				<div>English(USA)</div>
				<div>Help</div>
				<div>Privacy</div>
				<div>Terms</div>
			</div>
		</div>
	);
};

export default SignIn;
