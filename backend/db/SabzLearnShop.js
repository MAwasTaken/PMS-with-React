const mysql = require("mysql");

const SabzlearnShopDB = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "CMS-with-react",
});

module.exports = SabzlearnShopDB;
