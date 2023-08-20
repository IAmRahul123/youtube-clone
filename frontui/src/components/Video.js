/** @format */

import React from "react";
import "./Video.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import Iframe from "react-iframe";
import NewComment from "./Comments/NewComment";
import Comments from "./Comments/Comments";
import Card from "./Card";
import SmallCards from "./smallCards/SmallCards";

const Video = () => {
	return (
		<div className="Video-conainer">
			<div className="left-s">
				<div className="video-player">
					<Iframe
						url="http://www.youtube.com/embed/xDMP3i36naA"
						width="100%"
						height="720"
						title="Youtube video player"
						frameBorder="0"
						allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
						allowFullScreen
					/>
				</div>
				<div className="text-container">
					<div className="titles">title</div>
					<div className="info-container">
						<div className="infos">info</div>
						<div className="icons">
							<div className="iconStyle">
								<ThumbUpOutlinedIcon />
								123
							</div>
							<div className="iconStyle">
								<ThumbDownOutlinedIcon />
								Dislike
							</div>
							<div className="iconStyle">
								<ReplyOutlinedIcon />
								Share
							</div>
							<div className="iconStyle">
								<PlaylistAddOutlinedIcon />
								Save
							</div>
						</div>
					</div>
				</div>
				<div className="owner-container">
					<div className="user-container">
						<img
							className="channel-image"
							src="https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
						/>
						<div className="user-info">
							<div className="user-name">Rahul's Den</div>
							<div className="subscribers">1.6K subscribers</div>
						</div>
					</div>
					<div>
						<div className="btn-container">
							<button className="btn-sub">Subscribe</button>
						</div>
					</div>
				</div>
				<div className="information">
					to construct online and mobile apps, web servers, games, and more.
					JavaScript is an object-oriented programming language that is used to
					generate websites and applications. It was created with the intention
					of being used in a browser. Even today, the server-side version of
					JavaScript known as Node.js may be used to create online and mobile
					apps, real-time applications, onlin
				</div>
				<div className="comments-container">
					<div className="new-comment">
						<NewComment />
					</div>
					<div className="All-comments">
						<Comments />
						<Comments />
						<Comments />
						<Comments />

						<Comments />
						<Comments />
					</div>
				</div>
			</div>

			<div className="right-s">
				<SmallCards />
				<SmallCards />
				<SmallCards />
				<SmallCards />
				<SmallCards />
				<SmallCards />
				<SmallCards />
				<SmallCards />
				<SmallCards />
				<SmallCards />
				<SmallCards />
				<SmallCards />
				<SmallCards />
				<SmallCards />
				<SmallCards />
				<SmallCards />
			</div>
		</div>
	);
};

export default Video;
