// api/controllers/ledController.js

'use strict';

import Station from '../models/Station'


exports.find = async function(req, res) {
	try {
		let stations = await Station.find(req.params.search);
		// res.header("Cache-Control", "max-age=600");
		res.json(stations)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
};
