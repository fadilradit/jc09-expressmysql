const mysql = require('mysql')

const conn = mysql.createConnection(
    {
        user: 'fadilradit',
        password: 'Mysql123',
        host: 'db4free.net',
        database: 'fadilradit',
        port : 3306
    }
)

module.exports = conn