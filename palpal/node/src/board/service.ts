const boardRepository = require("./repository");
import { boardModifyData, boardRegister, pageListNum } from "./interface";
const userRepository = require("../user/repository");

class service {
  async delete(id: { boardId: number }) {
    return await boardRepository.boardDelete(id.boardId);
  }

  async modify(board: boardModifyData) {
    return await boardRepository.boardModify(board);
  }

  async read(id: { boardId: number }) {
    return await boardRepository.read(id.boardId);
  }

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
    const user = await userRepository.userInquiry(board.email);
    return await boardRepository.register({
      title: board.title,
      content: board.content,
      writer: board.writer,
      ownerId: user.id,
    });
  }
}
module.exports = new service();
