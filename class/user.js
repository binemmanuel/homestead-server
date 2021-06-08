const { Database } = require("./database");

class User extends Database {
	constructor(user) {
		super();

		this.userId = user.userId;
		this.fullName = user.fullName;
		this.phoneNumber = user.phoneNumber;
		this.dateOfBirth = user.dateOfBirth;
		this.occupation = user.occupation;
		this.houseNumber = user.houseNumber;
		this.streetAddress = user.streetAddress;
		this.residentsStatus = user.residentsStatus;
		this.residentOf = user.residentOf;
		this.hasPets = user.hasPets;
		this.password = user.password;
	}

	createAccount() {
		let result = false;
		this.connnection.execute(
			`INSERT INTO
                hs_users(
                    userId,
                    fullName,
                    phoneNumber,
                    dateOfBirth,
                    occupation,
                    houseNumber,
                    streetAddress,
                    residentsStatus,
                    residentOf,
                    hasPets,
                    password
                )
                VALUES(
                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
                )`,
			[
				this.userId,
				this.fullName,
				this.phoneNumber,
				this.dateOfBirth,
				this.occupation,
				this.houseNumber,
				this.streetAddress,
				this.residentsStatus,
				this.residentOf,
				this.hasPets,
				this.password,
			],
			(error, result) => {
				if (error) {
					console.log(error.sqlMessage);
					return;
				}

				result.insertId;

				result = true;
			}
		);

		return result;
	}
}

module.exports.User = User;
