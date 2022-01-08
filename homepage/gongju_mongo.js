const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const mongoClient = require('mongodb').MongoClient
const app = express()
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.use(morgan('dev'))

var db;
var databaseUrl = 'mongodb://3.35.103.171:27017/'

app.get('/', (req, res) => {
	//res.send('Web Server Started~!!')
	res.sendFile('/data/gongju/homepage' + '/index.html')
});

app.get('/list', (req,res) => {	
	mongoClient.connect(databaseUrl, function(err, database){
		if(err != null){
			res.json({'count':0})
		}else{
			db = database.db('test')
			db.collection('gongju').find({}).toArray(function(err, result){
				if(err) throw err
				//console.log('result : ')
				//console.log(result)
				res.render('list.ejs', { data : result });
			})
		}
	});
});



app.get('/emp', (req, res) => {
	mongoClient.connect(databaseUrl, function(err, database){
		if(err != null){
			res.json({'count':0})
		}else{
			db = database.db('test')
			db.collection('emp').find({}).toArray(function(err, result){
				if(err) throw err
				//console.log('result : ')
				//console.log(result)
				res.json(JSON.stringify(result))
			})
		}
	})
});

app.get('/bios', (req, res) => {
	mongoClient.connect(databaseUrl, function(err, database){
		if(err != null){
			res.json({'count':0})
		}else{
			db = database.db('test')
			db.collection('bios').find({}).toArray(function(err, result){
				if(err) throw err
				console.log('result : ')
				console.log(result)
				res.json(JSON.stringify(result))
			})
		}
	})
});

app.get('/foo', (req, res) => {
	mongoClient.connect(databaseUrl, function(err, database){
		if(err != null){
			res.json({'count':0})
		}else{
			db = database.db('test')
			db.collection('bios').find({}).toArray(function(err, result){
				if(err) throw err
				console.log('result : ')
				console.log(result)
				res.json(JSON.stringify(result))
			})
		}
	})
});

app.listen(app.get('port'), () =>{
	console.log('서버 실행 중')

});

