const boardRepository = require("./repository");
import { boardRegister, pageListNum } from "./interface";
const userRepository = require("../user/repository");

class service {
  async pageList(page: pageListNum) {
    let start = 0;
    if (page.pageSize === undefined) page.pageSize = 15;

    page.page > 0 ? (start = (page.page - 1) * page.pageSize) : (page.page = 1);

    const pagenationCount = Math.ceil(
      (await boardRepository.boardCount()) / page.pageSize
    );

    if (page.page > pagenationCount) return null;

    const result = await boardRepository.pageList({
      start,
      pageSize: page.pageSize,
    });

    return {
      ...result,
      pagenationCount,
    };
  }

  async register(board: boardRegister) {
    console.log("service board : ", board);
    const user = await userRepository.userInquiry(board.email);
    console.log("service user : ", user);
    return await boardRepository.register({
      title: board.title,
      content: board.content,
      writer: board.writer,
      ownerId: user.id,
    });
  }
}
module.exports = new service();
