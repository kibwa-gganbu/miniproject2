const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


//define scheme
const gongjuSchema = mongoose.Schema({
    datetm: Date,
    floor : String,
    parking : Number,
    parkingarea : Number,
    date : Date,
    hour : Number,
    minute : Number
});

// create model with mongodb collection & scheme
const Gongju = mongoose.model('gongju', gongjuSchema);

// GET home page
router.get('/list', function (req, res, next) {
    Gongju.find({}, function(err, docs){
        if(err) console.log('err');``
        console.log(docs)
        // res.render('index', { data : docs });
        res.send(docs)
    });

});

module.exports = router;
// module.exports = mongoose.model("Post", gongjuSchema)

// select * from users
Gongju.find({}).exec(function(err,docs){
    console.log("Query 1");
    if(err) console.log('err');
    console.log(docs+"\n");
    return;
});
