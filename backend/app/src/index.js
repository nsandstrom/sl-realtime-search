// server.js

'use strict';
import Config from 'config'

var express = require('express'),
	app = express(),
	port = Config.api_endpoint.port || 3001,
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	fs = require('fs');

// Initiate database connection
const connection_string = Config.db.connection_string
mongoose.Promise = global.Promise
mongoose.connect(connection_string, {useMongoClient: true})

// Initiate http api
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes')
app.use(routes)

app.listen(port);

console.log('Backend process started on port: %s', port);
