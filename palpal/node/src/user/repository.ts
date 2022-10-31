const db = require("../api/middlewares/pool");
require("dotenv").config();
const date = require("../common/date");
const currentDate = date.today();

exports.register = (req: {
  email: string;
  password: string;
  nickname: string;
  posts: string;
}) => {
  const { email, password, nickname, posts } = req;
  const sql = `INSERT INTO member (email, password, nickname, createdAt, posts) VALUES ('${email}', '${password}', '${nickname}', '${currentDate}', '${posts}')`;

  return new Promise((resolve) => {
    try {
      db.getConnectionPool((conn) => {
        // console.log("!! :", typeof conn);
        // (err: NodeJS.ErrnoException, doc: mariadb.PoolConnection)
        conn.query(sql, (err: NodeJS.ErrnoException, doc) => {
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
    }
  });
};
