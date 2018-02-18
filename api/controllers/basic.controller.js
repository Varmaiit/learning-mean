
var dbconn = require('../data/dbconnection.js');
var hotelData = require('../data/hotel-data.json');
var ObjectId = require('mongodb').ObjectId;


module.exports.basicGetAll = function(req, res) {

    var db = dbconn.get();
    var collection = db.collection('hotels');

    var offset = 0;
    var count = 5;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10)
    }

    collection.find()
            .skip(offset)
            .limit(count)
            .toArray(function(err, docs) {
                console.log("Found hotels", docs);
                res
                    .status(200)
                    .json(docs);
           
            });

    // console.log("db", db);

    // console.log("GET the hotels using query string");
    // console.log(req.query);

    // if (req.query && req.query.offset) {
    //     offset = parseInt(req.query.offset, 10);
    // }

    // if (req.query && req.query.count) {
    //     count = parseInt(req.query.count, 10)
    // }
    // console
    // var returnData =  hotelData.slice(offset, offset+count);
    // res
    //   .status(200)
    //   .json( returnData);
};


module.exports.basicGetOne = function(req, res) {
    var db = dbconn.get();
    var collection = db.collection('hotels');
    var hotelId = req.params.hotelId;
    collection
        .findOne({
            _id : ObjectId(hotelId)
        }, function(err, docs) {
            console.log("Found hotels", docs);
            res
                .status(200)
                .json(docs);
       
        });
};


module.exports.basicAddOne = function(req, res) {
    console.log("POST new hotel");
    var db = dbconn.get();
    var collection = db.collection('hotels');
    var newHotel;

    if (req.body && req.body.name && req.body.stars) {
        newHotel = req.body;
        newHotel.stars = parseInt(req.body.stars, 10);
        collection.insertOne(newHotel, function(err, response) {
        console.log("Hotel added", response);        
        console.log("Hotel added 2", response.ops);
        res
            .status(201)
            .json(response.ops);


        });
        
        // console.log(req.body);
        // res
        //     .status(200)
        //     .json(newHotel);

    } else {
        console.log(req.body);
        console.log("Data missing from body");
        res
            .status(400)
            .json({message: "Requrired data missing from body"});
    }
       

};