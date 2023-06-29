const mysql = require("mysql");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "demo",
});
module.exports.query = function ($sql, $params = []) {
  return new Promise((resolve, reject) => {
    pool.query($sql, $params, function (error, results, fileds) {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};
