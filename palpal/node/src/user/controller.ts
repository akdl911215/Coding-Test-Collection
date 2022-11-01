import express, { Request, Response } from "express";
const router = express.Router();
const userService = require("./service");

router.post("/auth", async (req: Request, res: Response) => {
  let HEADER = "";
  if (req?.header("Authorization")) {
    HEADER = req?.header("Authorization") || "";
  }

  const { code, message } = await userService.jwtToken({
    token: HEADER.split(" ")[1],
  });
  return res.json({ code, message });
});

router.post("/signin", async (req: Request, res: Response) => {
  const { email, nickname, token } = await userService.signin(req?.body);

  res.set({
    "content-type": "application/json; charset=utf-8",
  });
  if (email !== undefined && token !== undefined) {
    res.json({
      message: "로그인 성공",
      result: "토큰 발급 완료",
      code: 200,
      email: email,
      nickname: nickname,
      token: token,
    });
  } else {
    res.json({
      message: "로그인 실패",
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
