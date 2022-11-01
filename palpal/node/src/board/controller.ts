import express, { Request, Response } from "express";
const router = express.Router();
const boardService = require("./service");

router.post("/register", async (req: Request, res: Response) => {
  const { code, email, password, nickname, posts } =
    await boardService.register(req?.body);

  //
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
