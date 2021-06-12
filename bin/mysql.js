// bin/mysql.js
const mysql = require('mysql2');

function getConnection() {
    let instance = null;

    return {
        getInstance: function() {
            if (instance == null) {
                const config = {
                    host: '132.226.226.226',
                    user: 'test_user',
                    password: '{amf24p75?!}',
                    database: 'TEST',
                };
                const pool = mysql.createPool(config);
                instance = pool.promise();
            }
            return instance;
        }
    }
}

module.exports = getConnection().getInstance();