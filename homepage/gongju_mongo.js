const morgan = require('morgan');
const fs = require('fs');
const mysql = require('mysql');
const mongoClient = require('mongodb').MongoClient;
const express = require('express');
const path = require('path');
const php = require('php')
const app = express();
app.use(morgan('dev'));

//app.set('views', path.join(__dirname, 'templates'))
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get("/", (req,res) => {
	res.render('index.html')
});

app.listen(app.get('port'), () =>{
	console.log('서버 실행 중')
});


