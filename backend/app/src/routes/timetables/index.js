// routes/orderRoutes.js

'use strict';

const express = require('express')

const timetable = require('controllers/timetableController');

const timetableRoutes = express.Router();

timetableRoutes.route('/realtime/:id')
	.get(timetable.realtime)

module.exports = timetableRoutes
