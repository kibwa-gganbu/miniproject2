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
var databaseUrl = 'mongodb://127.0.0.1:27017/'

// app.get('/', (req, res) => {
// 	//res.send('Web Server Started~!!')
// 	res.sendFile('/Users/seonil/Desktop/workspace/miniproject2/homepage' + '/index.html')
// });

app.get('/', (req,res) => {	
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

app.listen(app.get('port'), () =>{
	console.log('서버 실행 중')

});

