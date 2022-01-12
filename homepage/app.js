const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const mongoClient = require('mongodb').MongoClient;
const app = express();
app.set('port', process.env.PORT || 3000);
// app.set('view engine', 'ejs');
app.use(morgan('dev'));

app.get("/", (req,res) => {
	res.render('index.php')
});

app.listen(app.get('port'), () =>{
	console.log('서버 실행 중')

});
