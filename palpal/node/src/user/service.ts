const userRepository = require("./repository");
const userModel = require("./model");
// const jwt = require("../security/jwt");
require("dotenv").config();

class service {
  async signup(user: {
    email: string;
    password: string;
    nickname: string;
    posts: string;
  }) {
    return userRepository.register(user);
  }
}
module.exports = new service();
