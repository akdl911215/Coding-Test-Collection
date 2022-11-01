const db = require("../api/middlewares/pool");
require("dotenv").config();
const date = require("../common/date");
const currentDate = date.today();
import {
  boardAndUserData,
  boardModifyData,
  pageListStartNum,
} from "./interface";

exports.boardDelete = (req: number) => {
  const sql = `DELETE FROM palpal_board WHERE id = ${req}`;

  return new Promise((resolve) => {
    try {
      db.getConnectionPool((connection: any) => {
        connection.query(sql, (err: NodeJS.ErrnoException, doc: any) => {
          if (err) {
            console.error("board delete error : ", err);
            resolve({
              message: "게시판 삭제 실패",
              error: err,
            });
          }

          if (doc) {
            console.log("board delete success : ", doc);
            resolve({
              code: 200,
              message: "게시판 삭제 성공",
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("board delete promise error : ", err);
    }
  });
};

exports.boardModify = (req: boardModifyData) => {
  const { boardId, title, content } = req;
  const sql = `UPDATE palpal_board SET title = '${title}', content = '${content}', updateAt = '${currentDate}' WHERE id = ${boardId}`;

  return new Promise((resolve) => {
    try {
      db.getConnectionPool((connection: any) => {
        connection.query(sql, (err: NodeJS.ErrnoException, rows: any) => {
          if (rows) {
            resolve({
              message: "게시판 정보 수정 완료되었습니다.",
              code: 200,
              success: rows,
            });
          }

          if (err) {
            console.error("board modify error : ", err);
            resolve({
              message: "투자 게시판 정보 수정 실패하였습니다.",
              failed: err,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("board modify db connection catch error : ", err);
      throw err;
    }
  });
};

exports.read = (req: number) => {
  const sql = `SELECT pb.title, pb.content, u.nickname FROM palpal_board pb LEFT JOIN member u ON pb.ownerId = u.id WHERE pb.id = ${req}`;

  return new Promise((resolve) => {
    try {
      db.getConnectionPool((connection: any) => {
        connection.query(sql, (err: NodeJS.ErrnoException, doc: any) => {
          if (err) {
            console.error("connection board read error : ", err);
            resolve({
              message: "게시판 리드 조회 실패",
              error: err,
            });
          }

          if (doc) {
            resolve({
              code: 200,
              message: "게시판 리드 조회 성공",
              success: doc,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("read promise error : ", err);
    }
  });
};

exports.pageList = (req: pageListStartNum) => {
  const { start, pageSize } = req;
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
