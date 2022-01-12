const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mysql configuration
const mysql = require('mysql');
const mysqlClient = mysql.createConnection({
    host: "mymysql.cxmyrmxomyz9.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "abcd1234",
    database: "gongju"
});

mysqlClient.connect(function(err){
	if(!err){
	    console.log("mysql is connected ... \n\n");
	}else{
		console.log("Error connection mysql ... \n\n");
	}
});

//mongoose configuration
const mongoose = require('mongoose');
//3.35.103.171
mongoose.connect('mongodb://3.35.103.171:27017/test', function(err){
    if(!err){
        console.log("mongoose is connected ... \n\n");
    }else{
        console.log("Error connection mongoose ... \n\n");
    }
});


var mongo_sql = require('./routes/mongo_sql.js');
app.use('/', mongo_sql);

app.listen(app.get('port'), () =>{
	console.log('서버 실행 중')
});
