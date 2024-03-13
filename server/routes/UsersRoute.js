import express from "express";
import {
  updateUser,
  deletedUser,
  getUser,
  subscribe,
  unSubscribe,
  like,
  dislike,
} from "../controllers/UsersContoller.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deletedUser);
router.get("/find/:id", verifyToken, getUser);
router.put("/sub/:id", verifyToken, subscribe);
router.put("/unsub/:id", verifyToken, unSubscribe);
router.put("/like/:videoId", verifyToken, like);
router.put("/dislike/:videoId", verifyToken, dislike);
export default router;
