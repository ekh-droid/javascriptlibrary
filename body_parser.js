//this is the general setup for an HTTP request with body parser
//express framework provides an abstraction layer above the vanilla 
//http module to make handling web traffic & APIs a little easier.

var express = require('express');
var http = reqiure('http');
var bodyParser = require('body-parser');

var app = express();
//using body parser allows you to access req.body from within your routes
app.use(bodyParser.json({ type: '*/*'}));

var port = process.env.PORT || 3000;
//creates server on computer - http server object
var server = http.createServer();

var server = http.createServer(app);

server.listen(port);
console.log('Server listening on ' + port);