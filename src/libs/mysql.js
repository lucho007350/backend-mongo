const mysql = require('mysql2/promise');

let connection;

const getConnection = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'backblog',
    });

    console.log('conectado a la base de datos backblog');
  }
  return connection;
};

module.exports = getConnection