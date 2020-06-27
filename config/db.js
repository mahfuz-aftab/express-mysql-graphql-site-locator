const dbconnection = require("./db.connection.js");
const Sequelize = require("sequelize");

//let database = {};

const database = new Sequelize(dbconnection.DB, dbconnection.USER, dbconnection.PASSWORD, {
	host: dbconnection.HOST,
	dialect: dbconnection.dialect,
	operatorsAliases: false,
	pool: {
		max: dbconnection.pool.max,
		min: dbconnection.pool.min,
		acquire: dbconnection.pool.acquire,
		idle: dbconnection.pool.idle
	}
});

// database.floor = require('../app/models/floor.model');
// database.site = require('../app/models/site.model');

module.exports = database;


// /******************TEST-SQL*************************/

// const mysql = require ('mysql2');
// const dbconnection = require("./db.connection.js");


// const database = mysql.createConnection({
// 	host: dbconnection.HOST,
// 	user: dbconnection.USER,
// 	password: dbconnection.PASSWORD,
// 	database: dbconnection.DB
// });  

// // dbconnection.connect (error => {
// // 	if (error) throw error;
// // 	console.log(`Successfully Connected to ${dbconnection.DB}`);	
// // });

// module.exports = database;
// console.log("Connected");