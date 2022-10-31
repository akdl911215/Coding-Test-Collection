const mariadb = require("mysql2");
const dbConfig = require("../../config/database");
const pool = mariadb.createPool(dbConfig);
// const connections = require("../../../node_modules/mysql2/index/PoolConnection");

// interface connection {
//   err: NodeJS.ErrnoException;
//   conn: connections;
// }

exports.getConnectionPool = (callback) => {
  console.log("connectionpool callback : ", callback);
  pool.getConnection((err, conn) => {
    if (!err) callback(conn);
  });
};
