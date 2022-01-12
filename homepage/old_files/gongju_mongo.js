const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const mongoClient = require('mongodb').MongoClient;
const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(morgan('dev'));

var db;
var databaseUrl = 'mongodb://3.35.103.171/:27017/';

// MYSQL
const mysqlClient = mysql.createConnection({
    host: "mymysql.cxmyrmxomyz9.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "abcd1234",
    database: "gongju"
});

mysqlClient.connect(function(err){
	if(!err){
			console.log("Database is connected ... \n\n");
	}else{
			console.log("Error connection database ... \n\n");
	}
});

// floor, date, hour, avg_num
app.get("/", (req,res) => {

	// var mysql_data;
	var sql_data;

	mysqlClient.query('SELECT * FROM parking limit 10' , function(err, rows, fields){
		mysqlClient.end();
		if(!err){
			// res.send(rows);
			// res.render('list.ejs', { data : rows });
			sql_data = rows
			// mongo_sql_data.push({mysql : rows})
		}
		else
			console.log('Error while performing Query.');
	});

	// var mongo_data;



	res.render("list.ejs", { data : sql_data });
	colsole.log(sql_data);
});
	


// MONGO
// app.get("/", (req,res) => {	
// 	mongoClient.connect(databaseUrl, function(err, database){
// 		if(err != null){
// 			res.json({'count':0})
// 		}else{
// 			db = database.db('test')
// 			db.collection('gongju').find({}).toArray(function(err, result){
// 				if(err) throw err
// 				//console.log('result : ')
// 				//console.log(result)
// 				res.render('list.ejs', { data : result });
// 			})
// 		}
// 	});
// });

app.listen(app.get('port'), () =>{
	console.log('서버 실행 중')

});


