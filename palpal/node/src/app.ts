const express = require("express");
const app = express();
const hostname = "localhost";
const PORT = 8080;

console.log("Hello TypeScript");

app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}`);
});

app.get("/pet", function (req, res) {
  console.log("req : ", req);
  res.send("용품쇼핑사이틉니다");
});
