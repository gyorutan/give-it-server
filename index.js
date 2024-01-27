const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connectDB } = require("./src/libs/database");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
  })
);

const authRouter = require("./src/auth/auth.router");
const usersRouter = require("./src/users/users.router");
const postsRouter = require("./src/posts/posts.router");

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// healthCheck
app.get("/", async (req, res) => {
  res.json("서버 연결에 성공하였습니다");
});
