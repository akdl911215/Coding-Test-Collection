import express, { Request, Response } from "express";
const router = express.Router();
const boardService = require("./service");

router.post("/list", async (req: Request, res: Response) =>
  res.json(await boardService.pageList(req?.body))
);

router.post("/register", async (req: Request, res: Response) => {
  const { message, code } = await boardService.register(req?.body);
  console.log(`register message : ${message}, code : ${code}`);

  res.json({
    code,
    message,
  });
});

module.exports = router;
