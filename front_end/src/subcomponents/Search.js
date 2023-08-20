/** @format */

import React, { useState } from "react";
import "./Search.css";
import { FiSearch } from "react-icons/fi";
import { BsFillMicFill } from "react-icons/bs";

const Search = () => {
	const [onFocus, setOnFocus] = useState(false);
	return (
		<div className="mainContainers">
			<div className="inputBox">
				<input placeholder="Search" onFocus={() => setOnFocus(!onFocus)} />
				<button className="btnsearch">
					<FiSearch size={20} className="iconSearch" />
				</button>
			</div>

			<div className="mic">
				<BsFillMicFill size={20} />
			</div>
		</div>
	);
};

export default Search;
