const userRepository = require("./repository");
const userModel = require("./model");
// const jwt = require("../security/jwt");
require("dotenv").config();

class service {
  async signup(user) {
    return userRepository.register(user);
  }
}
module.exports = new service();
