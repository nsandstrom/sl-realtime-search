// routes/index.js

'use strict';

const express = require('express')
const routes = express.Router();

const stationRoutes = require('./stations');
const timetableRoutes = require('./timetables');

routes.use('/stations', stationRoutes)
routes.use('/timetables', timetableRoutes)

routes.route('/').get((req, res) => { res.send("/") })

module.exports = routes
