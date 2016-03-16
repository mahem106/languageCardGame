"use strict";


var mysql = require('mysql');




var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'assignment14'
});

connection.connect(function(err) {
	if(err){
		console.log('Error: ', err);
	}
	else{
		console.log('Connection Success!');
	}
});


module.exports = connection;
