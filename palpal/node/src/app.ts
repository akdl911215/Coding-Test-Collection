import express from "express";
const app = express();
const hostname = "localhost";
const PORT = 8080;
const cors = require("cors");
const userRouter = require("./user/controller");
const boardRouter = require("./board/controller");
require("dotenv").config();
const { swaggerUi, specs } = require("./Swagger");

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
app.use(cors());
app.use(express.json());
app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}`);
});

app.use("/users", userRouter);
app.use("/board", boardRouter);
