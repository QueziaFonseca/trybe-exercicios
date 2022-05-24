const mysql = require('mysql2/promise');

	const connection = mysql.createPool({
		host: '127.0.0.1',
		user: 'root',
		password: 'docker',
		database: 'users_crud' });

	module.exports = connection;