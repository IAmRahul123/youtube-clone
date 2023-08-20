/** @format */

import { createError } from "../error.js";
import Users from "../models/Users.js";
import Video from "../models/Video.js";
export const update = async (req, res, next) => {
	if (req.params.id === req.user.id) {
		try {
			const updatedUser = await Users.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res.status(200).json(updatedUser);
		} catch (error) {
			next(error);
		}
	} else {
		return next(createError(403, "you can update only your account!"));
	}
};
export const deleteUser = async (req, res, next) => {
	if (req.params.id === req.user.id) {
		try {
			await Users.findByIdAndDelete(req.params.id);
			res.status(200).json("User has been deleted!");
		} catch (error) {
			next(error);
		}
	} else {
		return next(createError(403, "you can update only your account!"));
	}
};
export const getUser = async (req, res, next) => {
	try {
		const user = await Users.findById(req.params.id);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};
export const subscribe = async (req, res, next) => {
	try {
		await Users.findByIdAndUpdate(req.user.id, {
			$push: { subscribedUsers: req.params.id }, //storing subscribed channels id in subscribedUsers table
		});
		await Users.findByIdAndUpdate(req.params.id, {
			$inc: { subscribers: 1 }, //incrementing subscriber of that channel
		});
		res.status(200).json("Subscription successfull.");
	} catch (error) {
		next(error);
	}
};
export const unsubscribe = async (req, res, next) => {
	try {
		await Users.findByIdAndUpdate(req.user.id, {
			$pull: { subscribedUsers: req.params.id }, //removing subscribed channels id from subscribedUsers table
		});
		await Users.findByIdAndUpdate(req.params.id, {
			$inc: { subscribers: -1 }, //decrementing subscriber of that channel
		});
		res.status(200).json("UnSubscription successfull.");
	} catch (error) {
		next(error);
	}
};
export const like = async (req, res, next) => {
	const id = req.user.id;
	const videoId = req.params.videoId;
	try {
		await Video.findByIdAndUpdate(videoId, {
			$addToSet: { likes: id },
			$pull: { dislikes: id },
		});
		res.status(200).json("The video has been liked");
	} catch (error) {
		next(error);
	}
};
export const dislike = async (req, res, next) => {
	const id = req.user.id;
	const videoId = req.params.videoId;
	try {
		await Video.findByIdAndUpdate(videoId, {
			$addToSet: { dislikes: id },
			$pull: { likes: id },
		});
		res.status(200).json("The video has been liked");
	} catch (error) {
		next(error);
	}
};
