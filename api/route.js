var express = require('express');
var router = express.Router();

var basicCtrl = require('./controllers/basic.controller.js');


router
    .route('/basic')
    .get(basicCtrl.basicGetAll);

router
    .route('/basic/:hotelId')
    .get(basicCtrl.basicGetOne);

router
    .route('/basic/newhotel')
    .post(basicCtrl.basicAddOne);


module.exports = router;