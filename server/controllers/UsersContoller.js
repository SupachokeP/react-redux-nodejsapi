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
export const deletedUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User Has been deleted");
  } else {
    return next(createError(403, "You can delete only your account!"));
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(createError(500, "User not found!"));
  }
};
export const subscribe = async (req, res, next) => {
  try {
    await User.findById(req.user.id, {
      $push: { subscribersUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json("Subscription success");
  } catch (error) {
    next(error);
  }
};
export const unSubscribe = async (req, res, next) => {
  try {
    await User.findById(req.user.id, {
      $pull: { subscribersUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });
    res.status(200).json("UnSubscription success");
  } catch (error) {
    next(error);
  }
};
export const like = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
export const dislike = (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
