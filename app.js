
// requirements 
var express =  require('express');
var app = express();
var bodyParser = require('body-parser');


// db connections open
require('./api/data/dbconnection.js').open();

//path
var path = require('path');

// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));

// routes
var routes = require('./api/route.js');
// var routes = require('./routes');

app.set('port', 3000);

// code related to middleware
app.use(function(req, res, next) {
    console.log(req.method, res.url);
    next();
});

app.use('/hello', routes);

var public_dir =  path.join(__dirname, 'public');

app.use(express.static(public_dir));

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Requests on port  ' + port);
});