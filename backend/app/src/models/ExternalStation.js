// src/models/Led.js

'use strict';

import ApiCall from '../ApiCall'
import Config from 'config'

const api_key = Config.api_keys.stations
const base_url = "http://api.sl.se/api2/typeahead.json?stationsonly=true&key="

export default class ExternalStation {

	static async find(searchFor){
		let url = base_url
		url += api_key
		url += "&searchstring="
		url += encodeURIComponent(searchFor)
		console.log("ask trafiklab for location of %s", searchFor)
		let results = await ApiCall.get(url)
		return results.ResponseData
	}
}
