//server.js
var express = require('express');
const http = require('http');
var bodyParser   = require('body-parser');
var app = express();
app.use(bodyParser.json()); // get information from html forms

// routes ======================================================================
require('./app/routes.js')(app); // load our routes and pass in our app

// launch ======================================================================
const httpServer = http.createServer(app);

httpServer.listen(8080, () => {
	console.log('HTTP Server running on port 8080');
});

