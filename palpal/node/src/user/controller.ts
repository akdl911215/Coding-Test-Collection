// const userExpress = require("express");
import express, { Request, Response } from "express";
const router = express.Router();
const userService = require("./service");

router.post("/signin", async (req: Request, res: Response) => {
  console.log("signin req?.body  :", req?.body);
  const { email, token } = await userService.signin(req?.body);
  console.log(`email: ${email}, token: ${token}`);

  res.set({
    "content-type": "application/json; charset=utf-8",
  });
  if (email !== undefined && token !== undefined) {
    res.json({
      message: "로그인 성공",
      result: "토큰 발급 완료",
      code: 200,
      email: email,
      token: token,
    });
  } else {
    res.json({
      message: "로그인 실패",
      email: email,
      token: token,
    });
  }
});

router.post("/signup", async (req: Request, res: Response) => {
  const { code, email, password, nickname, posts } = await userService.signup(
    req?.body
  );
  if (email !== undefined && password !== undefined && code === 200) {
    res.json({
      code,
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
