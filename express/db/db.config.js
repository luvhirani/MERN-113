const mysql = require("mysql2")

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "luvhirani",
    database: "mern113"
})

module.exports = pool.promise()