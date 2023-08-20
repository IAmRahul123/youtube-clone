/** @format */

import React from "react";
import { AiFillHome, AiOutlineLike, AiOutlinePlaySquare } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineExplore, MdOutlineWatchLater } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { FaPhotoVideo } from "react-icons/fa";

import "./Drawer.css";
const DrawerNav = () => {
	return (
		<div>
			<div className="drawerContainer">
				<div className="itemView">
					<div className="icons">
						<AiFillHome size={25} />
					</div>
					<div className="itemText">Home</div>
				</div>
				<div className="itemView">
					<div className="icons">
						<MdOutlineExplore size={25} />
					</div>
					<div className="itemText">Explore</div>
				</div>
				<div className="itemView">
					<div className="icons">
						<BiMoviePlay size={25} />
					</div>
					<div className="itemText">Shorts</div>
				</div>
				<div className="itemView">
					<div className="icons">
						<BsCollectionPlay size={25} />
					</div>
					<div className="itemText">Subscriptions</div>
				</div>
			</div>
			<div className="drawerContainer2">
				<div className="itemView">
					<div className="icons">
						<AiOutlinePlaySquare size={25} />
					</div>
					<div className="itemText">Library</div>
				</div>
				<div className="itemView">
					<div className="icons">
						<VscHistory size={25} />
					</div>
					<div className="itemText">History</div>
				</div>
				<div className="itemView">
					<div className="icons">
						<FaPhotoVideo size={25} />
					</div>
					<div className="itemText">Your Videos</div>
				</div>
				<div className="itemView">
					<div className="icons">
						<MdOutlineWatchLater size={25} />
					</div>
					<div className="itemText">Watch Later</div>
				</div>

				<div className="itemView">
					<div className="icons">
						<AiOutlineLike size={25} />
					</div>
					<div className="itemText">Liked Videos</div>
				</div>
			</div>
		</div>
	);
};

export default DrawerNav;
