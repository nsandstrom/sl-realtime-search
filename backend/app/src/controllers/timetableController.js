// api/controllers/ledController.js

'use strict';

import Timetable from '../models/Timetable'


exports.realtime = async function(req, res) {
	try {
		let stations = await Timetable.realtime(req.params.id);
		res.json(stations)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
};
