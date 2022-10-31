// const userExpress = require("express");
import express, { Request, Response } from "express";
const router = express.Router();
const userService = require("./service");

router.post("/signup", async (req: Request, res: Response) => {
  console.log("req?.body : ", req?.body);
  const { code, email, password, nickname, posts } = await userService.signup(
    req?.body
  );
  if (email !== undefined && password !== undefined && code === 200) {
    res.json({
      message: "회원가입 성공",
      user: {
        email: email,
        nickname: nickname,
        posts: posts,
      },
    });
  } else {
    res.json({
      message: "회원가입 실패",
    });
  }
});

module.exports = router;
