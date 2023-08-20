/** @format */

import React, { useState } from "react";
import "./DrawerNav.css";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import TheatersIcon from "@mui/icons-material/Theaters";
import CellTowerOutlinedIcon from "@mui/icons-material/CellTowerOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
const DrawerNav = () => {
	const [theme, setTheme] = useState("dark");
	return (
		<div
			style={{
				// paddingLeft: "2rem",
				paddingRight: "2rem",
				// paddingTop: "1rem",
				color: "#fff",
			}}
		>
			<div className="scrollable-div">
				<Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
					<div className="itemView">
						<HomeIcon />
						<span>Home</span>
					</div>
				</Link>
				<Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
					<div className="itemView">
						<ExploreIcon />
						<span>Explore</span>
					</div>
				</Link>
				<Link
					to="subscriptions"
					style={{ textDecoration: "none", color: "inherit" }}
				>
					<div className="itemView">
						<SubscriptionsIcon />
						<span>Subscriptions</span>
					</div>
				</Link>
				<div className="separator"></div>
				<div className="itemView">
					<VideoLibraryIcon />
					<span>Library</span>
				</div>
				<div className="itemView">
					<HistoryIcon />
					<span>History</span>
				</div>
				<div className="separator"></div>
				<div className="signin">
					<div>
						<div>Sign in to like videos,comment and subscribe.</div>
						<Link to="signIn" style={{ textDecoration: "none" }}>
							<button className="btn">
								<AccountCircleOutlinedIcon />
								<span> SIGN IN</span>
							</button>
						</Link>
					</div>
				</div>
				<div className="separator"></div>

				<div className="itemView">
					<LibraryMusicIcon />
					<span>Music</span>
				</div>

				<div className="itemView">
					<EmojiEventsIcon />
					<span>Sports</span>
				</div>
				<div className="itemView">
					<VideogameAssetIcon />
					<span>Gaming</span>
				</div>
				<div className="itemView">
					<TheatersIcon />
					<span>Movies</span>
				</div>
				<div className="itemView">
					<NewspaperOutlinedIcon />
					<span>News</span>
				</div>
				<div className="itemView">
					<CellTowerOutlinedIcon />
					<span>Live</span>
				</div>
				<div className="separator"></div>

				<div className="itemView">
					<SettingsOutlinedIcon />
					<span>Settings</span>
				</div>
				<div className="itemView">
					<OutlinedFlagIcon />
					<span>Report</span>
				</div>
				<div className="itemView">
					<HelpOutlineOutlinedIcon />
					<span>Help</span>
				</div>
				<div className="itemView">
					<SettingsBrightnessOutlinedIcon />
					<span onClick={() => setTheme(!theme)}>Light Mode</span>
				</div>
			</div>
		</div>
	);
};

export default DrawerNav;
