const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'sean90'
})

module.exports=pool.promise();