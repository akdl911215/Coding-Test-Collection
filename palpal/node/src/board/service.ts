const boardRepository = require("./repository");
import { boardRegister } from "./interface";
const userRepository = require("../user/repository");

class service {
  async signup(board: boardRegister) {
    const user = userRepository.userInquiry(board.writer);
    return boardRepository.register(board);
  }
}
module.exports = new service();
