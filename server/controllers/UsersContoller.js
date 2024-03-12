import { json } from "express";
import { createError } from "../error.js";
import User from "../models/User.js";
export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};
export const deletedUser = (req, res, next) => {};
export const getUser = (req, res, next) => {};
export const subscribe = (req, res, next) => {};
export const unSubscribe = (req, res, next) => {};
export const like = (req, res, next) => {};
export const dislike = (req, res, next) => {};
