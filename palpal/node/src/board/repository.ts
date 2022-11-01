const db = require("../api/middlewares/pool");
require("dotenv").config();
const date = require("../common/date");
const currentDate = date.today();
import { boardAndUserData } from "./interface";

exports.register = (req: boardAndUserData) => {
  const { title, content, writer, ownerId } = req;
  console.log("req : ", req);
  const sql = `INSERT INTO palpal_board(title, content, writer, ownerId, createdAt) VALUES ('${title}', '${content}', '${writer}', '${ownerId}', '${currentDate}')`;

  return new Promise((resolve) => {
    try {
      db.getConnectionPool((conn: any) => {
        conn.query(sql, (err: NodeJS.ErrnoException, doc: any) => {
          if (err) {
            console.error("board register query err : ", err);
            resolve({
              message: "게시판 등록 실패하였습니다.",
              failed: err,
            });
          }

          if (doc) {
            console.log("board register query success : ", doc);
            resolve({
              message: "게시판 등록 성공하였습니다.",
              code: 200,
              success: doc,
            });
          }
        });
        conn.release();
      });
    } catch (err) {
      console.error(`board register db connectionPool error : ${err}`);
      throw err;
    }
  });
};
