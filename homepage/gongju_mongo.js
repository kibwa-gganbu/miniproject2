const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const mongoClient = require('mongodb').MongoClient
const app = express()
app.set('port', process.env.PORT || 3000)
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(morgan('dev'))

var db;
var databaseUrl = 'mongodb://3.35.103.171:27017/'

app.get('/', (req,res) => {
	//res.send("인천 국제 공항 메인페이지입니다.")
	res.render('index.html');
});

// T1 주차장
app.get('/T1', (req,res) => {
	mongoClient.connect(databaseUrl, function(err, database){
		if(err != null){
			res.json({'count':0})
		}else{
			var query = {floor : /^T1/};
			db = database.db('test')
			db.collection('gongju').find(query).toArray(function(err, result){
				if(err){
					throw err;
				}
				//console.log('result : ')
				// console.log(result)
				res.render('gongju.html', { data : result });
			})
		}
	});
});

// T2 주차장
app.get('/t2', (req,res) => {
	mongoClient.connect(databaseUrl, function(err, database){
		if(err != null){
			res.json({'count':0})
		}else{
			var query = {floor : /^T2/};
			db = database.db('test')
			db.collection('gongju').find(query).toArray(function(err, result){
				if(err){
					throw err;
				}
				//console.log('result : ')
				// console.log(result)
				res.render('gongju.html', { data : result });
			})
		}
	});
});

app.listen(app.get('port'), () =>{
	console.log('서버 실행 중')

});
