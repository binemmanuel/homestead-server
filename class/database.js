const mysql = require("mysql2");

class Database {
	constructor(host, username, password, database) {
		this.host = host;
		this.username = username;
		this.password = password;
		this.database = database;

		// Create connections to the database
		this.connnection = mysql.createConnection({
			host: this.host || "localhost",
			user: this.username || "binemmanuel",
			password: this.password || "SMARTlogin89",
			database: this.database || "homestead",
		});
	}
}

module.exports.Database = Database;
