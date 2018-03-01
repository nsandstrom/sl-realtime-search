// routes/orderRoutes.js

'use strict';

const express = require('express')

const station = require('controllers/stationController');

const stationRoutes = express.Router();

stationRoutes.route('/find/:search')
	.get(station.find)

module.exports = stationRoutes
