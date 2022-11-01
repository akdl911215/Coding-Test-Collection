const db = require("../api/middlewares/pool");
require("dotenv").config();
const date = require("../common/date");
const currentDate = date.today();
import { boardAndUserData, pageListStartNum } from "./interface";

exports.pageList = (req: pageListStartNum) => {
  const { start, pageSize } = req;
  console.log(`start : ${start} , pageSize: ${pageSize}`);
  const sql = `SELECT pb.id, pb.ownerId, pb.title, pb.content, pb.createdAt, pb.updateAt, u.nickname 
		FROM palpal_board pb LEFT JOIN member u ON pb.ownerId = u.id ORDER BY pb.id DESC LIMIT ${start}, ${pageSize};`;

  return new Promise((resolve) => {
    try {
      db.getConnectionPool((connection: any) => {
        connection.query(sql, (err: NodeJS.ErrnoException, rows: any) => {
          if (rows) {
            resolve({
              message: "게시판 페이지 조회가 완료되었습니다.",
              code: 200,
              list: rows,
            });
          }

          if (err) {
            console.error("board page error : ", err);
            resolve({
              message: "게시판 페이지 조회가 실패하였습니다.",
              list: err,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("userList db connection catch error : ", err);
      throw err;
    }
  });
};

exports.boardCount = () => {
  const sql = `SELECT COUNT(*) FROM palpal_board`;
  return new Promise((resolve) => {
    try {
      db.getConnectionPool((connection: any) => {
        connection.query(sql, (err: NodeJS.ErrnoException, rows: any) => {
          if (err) {
            console.error("board count error : ", err);
          }

          if (rows) {
            resolve(rows[0]["COUNT(*)"]);
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("board count catch error : ", err);
      throw err;
    }
  });
};

exports.register = (req: boardAndUserData) => {
  const { title, content, ownerId } = req;
  console.log("req : ", req);
  const sql = `INSERT INTO palpal_board(title, content, ownerId, createdAt) VALUES ('${title}', '${content}', '${ownerId}', '${currentDate}')`;

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
