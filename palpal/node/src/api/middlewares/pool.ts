const mariadb = require("mysql2");
const dbConfig = require("../../config/database");
const pool = mariadb.createPool(dbConfig);

exports.getConnectionPool = (callback: any) => {
  pool.getConnection((err: NodeJS.ErrnoException, conn: any) => {
    if (!err) callback(conn);
  });
};
