// const express = require("express");
import express from "express";
const app = express();
const hostname = "localhost";
const PORT = 8080;
const cors = require("cors");
const userRouter = require("./user/controller");
const boardRouter = require("./board/controller");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}`);
});

app.use("/users", userRouter);
app.use("/board", boardRouter);
