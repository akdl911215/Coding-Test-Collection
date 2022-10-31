const userExpress = require("express");
const router = userExpress.Router();
const userService = require("./service");

router.post("/signup", async (req, res) => {
  console.log("req?.body : ", req?.body);
  const { username, password } = await userService.signup(req?.body);
  if (username !== undefined && password !== undefined) {
    res.json({
      message: "회원가입 성공",
    });
  } else {
    res.json({
      message: "회원가입 실패",
    });
  }

  console.log("res : ", res);
});

module.exports = router;
