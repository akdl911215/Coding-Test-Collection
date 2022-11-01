const db = require("../api/middlewares/pool");
require("dotenv").config();
const date = require("../common/date");
const currentDate = date.today();
import { userModel, userSignin } from "./interface";

exports.signin = (req: userSignin) => {
  const { email, password } = req;
  const sql = `SELECT * FROM member WHERE email = '${email}'`;

  return new Promise((resolve) => {
    try {
      db.getConnectionPool((conn: any) => {
        conn.query(sql, (err: NodeJS.ErrnoException, doc: any) => {
          if (err) {
            console.error("signin error : ", err);
            resolve({
              message: "로그인 실패",
            });
          }

          if (doc.length) {
            if (doc[0].email === email) {
              if (doc[0].password === password) {
                if (doc) {
                  console.log("로그인 성공");
                  resolve({
                    message: "로그인 성공",
                    code: 200,
                    email,
                  });
                }
              }
            }
          }
        });
        conn.release();
      });
    } catch (err) {
      console.error("signin promise catch error : ", err);
      throw err;
    }
  });
};

exports.register = (req: userModel) => {
  const { email, password, nickname, posts } = req;
  const sql = `INSERT INTO member (email, password, nickname, createdAt, posts) VALUES ('${email}', '${password}', '${nickname}', '${currentDate}', '${posts}')`;

  return new Promise((resolve) => {
    try {
      db.getConnectionPool((conn: any) => {
        conn.query(sql, (err: NodeJS.ErrnoException, doc: any) => {
          if (err) {
            console.error("user register query err : ", err);
            resolve({
              message: "회원가입 실패하였습니다.",
              failed: err,
            });
          }

          if (doc) {
            console.log("user register query success : ", doc);
            resolve({
              message: "회원가입 성공하였습니다.",
              code: 200,
              success: doc,
              email,
              password,
              nickname,
              posts,
            });
          }
        });
        conn.release();
      });
    } catch (err) {
      console.error(`db connectionPool error : ${err}`);
      throw err;
    }
  });
};
