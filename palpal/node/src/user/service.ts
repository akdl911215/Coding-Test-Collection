const userRepository = require("./repository");
const jwt = require("../security/jwt");
import { userModel } from "./interface";

class service {
  async jwtToken(token: { token: string }) {
    return await jwt.verify(token.token);
  }

  async signin(user: userModel) {
    const { email, nickname } = await userRepository.signin(user);
    const { token } = await jwt.sign(email);
    return { email, nickname, token };
  }

  async signup(user: userModel) {
    return userRepository.register(user);
  }
}
module.exports = new service();
