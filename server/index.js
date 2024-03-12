import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookiepaser from "cookie-parser";
import userRoute from "./routes/UsersRoute.js";
import videoRoute from "./routes/VideosRoute.js";
import commentRoute from "./routes/CommentsRoute.js";
import authRoute from "./routes/AuthRoute.js";
const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connect To DB");
    })
    .catch((err) => {
      throw err;
    });
};
app.use(cookiepaser());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/video", videoRoute);
app.use("/api/comment", commentRoute);
app.use("/api/auth", authRoute);
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});
app.listen(8800, () => {
  connect();
  console.log("connected to server");
});
