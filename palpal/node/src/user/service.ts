require("dotenv").config();
const userRepository = require("./repository");
const userModel = require("./model");
const jwt = require("../security/jwt");
import { userModel } from "./interface";

class service {
  async jwtToken(token: string) {
    console.log("service token : ", token);
    const { code, message, roles } = await jwt.verify(token);
    return { code, message, roles };
  }

  async signin(user: userModel) {
    const { email } = await userRepository.signin(user);
    const { token } = await jwt.sign(email);
    return { email, token };
  }

  async signup(user: userModel) {
    return userRepository.register(user);
  }
}
module.exports = new service();
