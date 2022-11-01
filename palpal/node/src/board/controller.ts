import express, { Request, Response } from "express";
const router = express.Router();
const boardService = require("./service");

router.post("/delete", async (req: Request, res: Response) =>
  res.json(await boardService.delete(req?.body))
);

router.post("/modify", async (req: Request, res: Response) =>
  res.json(await boardService.modify(req?.body))
);

router.post("/read", async (req: Request, res: Response) =>
  res.json(await boardService.read(req?.body))
);

router.post("/list", async (req: Request, res: Response) =>
  res.json(await boardService.pageList(req?.body))
);

router.post("/register", async (req: Request, res: Response) => {
  const { message, code } = await boardService.register(req?.body);

  res.json({
    code,
    message,
  });
});

module.exports = router;
