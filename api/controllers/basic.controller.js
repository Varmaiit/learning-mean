
var dbconn = require('../data/dbconnection.js');
var hotelData = require('../data/hotel-data.json');


module.exports.basicGetAll = function(req, res) {

    // var db = dbconn.get();
    // var collection = db.collection('meantest');

    // collection.find()
    //         .toArray(function(err, docs) {
    //             console.log("Found hotels", docs);
    //             res
    //                 .status(200)
    //                 .json(docs);
           
    //         });

    // console.log("db", db);

    console.log("GET the hotels using query string");
    console.log(req.query);

    var offset = 0;
    var count = 5;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10)
    }
    console
    var returnData =  hotelData.slice(offset, offset+count);
    res
      .status(200)
      .json( returnData);
};


module.exports.basicGetOne = function(req, res) {
    var hotelId = req.params.hotelId;
    var thisHotel = hotelData[hotelId];
    console.log("GET HotelID", hotelId);
    res
      .status(200)
      .json( thisHotel);
};