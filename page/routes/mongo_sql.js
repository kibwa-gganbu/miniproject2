// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
const app = express();

// define scheme
// const gongjuSchema = mongoose.Schema({
//     datetm: Date,
//     floor : String,
//     parking : Number,
//     parkingarea : Number,
//     date : Date,
//     hour : Number,
//     minute : Number
// });

// create model with mongodb collection & scheme
// const Gongju = mongoose.model('gongju', gongjuSchema);

const mongoClient = require('mongodb').MongoClient;
var db;
var databaseUrl = 'mongodb://3.35.103.171/:27017/';

app.get("/", (req,res) => {	
    mongoClient.connect(databaseUrl, function(err, database){
        if(err != null){
            res.json({'count':0})
        }else{
            db = database.db('test')
            db.collection('gongju').find({}).toArray(function(err, docs){
                if(err) throw err;
                res.render('index', { data : docs });
            })
        }
    });
});
// GET home page
// router.get('/', function (req, res, next) {
//     Gongju.find({}, function(err, docs){
//         if(err) console.log('err');``
//         console.log(docs)
//         res.render('index', { data : docs });
//     });
    
// });

module.exports = router;

// select * from users
// Gongju.find({}).exec(function(err,docs){
//     console.log("Query 1");
//     console.log(docs+"\n");
//     return;
// });
