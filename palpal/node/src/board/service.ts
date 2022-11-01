const boardRepository = require("./repository");
import { boardRegister } from "./interface";
const userRepository = require("../user/repository");

class service {
  async signup(board: boardRegister) {
    const user = userRepository.userInquiry(board.writer);
    return boardRepository.register({
      title: board.title,
      content: board.content,
      writer: board.writer,
      ownerId: user.id,
    });
  }
}
module.exports = new service();
