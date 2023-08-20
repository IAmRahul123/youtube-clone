/** @format */

import { createError } from "../error.js";
import Comment from "../models/Comment.js";
import Video from "../models/Video.js";

export const addComment = async (req, res, next) => {
	const newComment = new Comment({ ...req.body, userId: req.user.id });

	try {
		const savedComment = await newComment.save();
		res.status(200).send(savedComment);
	} catch (error) {
		next(error);
	}
};

export const deleteComment = async (req, res, next) => {
	try {
		const comment = await Comment.findById(res.params.id);
		const video = await Video.findById(res.params.id);

		if (req.user.id === comment.userId || req.user.id === video.userId) {
			await Comment.findByIdAndDelete(req.params.id);
			res.status(200).json("The Comment has been deleted");
		} else {
			return createError(403, "You can only delete your video");
		}
	} catch (error) {
		next(error);
	}
};

export const getComments = async (req, res, next) => {
	try {
		const allComments = Comment.find({ videoId: req.params.videoId });
		res.status(200).json(allComments);
	} catch (error) {
		next(error);
	}
};