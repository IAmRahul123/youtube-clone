/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import "./Card.css";
const Card = ({ type, video }) => {
	const [channel, setChannel] = useState({});

	useEffect(() => {
		const fetchChannel = async () => {
			const res = await axios.get(`/users/find/${video.userId}`);
			setChannel(res.data);
		};
		fetchChannel();
	}, [video.userId]);

	return (
		<Link to="/video/test" style={{ textDecoration: "none" }}>
			<div className="card-container">
				<img className="Image" src={video.imgUrl} />
				<div className="details">
					<img className="channel-image" src={channel.img} />
					<div className="Texts">
						<div className="Title">{video.title}</div>
						<div className="channel-name">{channel.name}</div>
						<div className="info">
							{video.views} views . {format(video.createdAt)}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Card;
