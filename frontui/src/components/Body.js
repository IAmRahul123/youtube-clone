/** @format */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Body.css";

const Body = ({ type }) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const fetchVideos = async () => {
			const res = await axios.get(`/videos/${type}`);
			setVideos(res.data);
		};
		fetchVideos();
	}, [type]);
	return (
		<div>
			<div className="Body-container">
				{videos.map((item) => (
					<Card key={item._id} video={item} />
				))}
			</div>
		</div>
	);
};

export default Body;
