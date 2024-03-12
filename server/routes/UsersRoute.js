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
router.delete("/:id", deletedUser);
router.get("/find/:id", getUser);
router.put("/sub/:id", subscribe);
router.put("/unsub/:id", unSubscribe);
router.put("/like/:videoId", like);
router.put("/dislike/:videoId", dislike);
export default router;
