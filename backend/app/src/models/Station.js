// src/models/Led.js

'use strict';

import ExternalStation from './ExternalStation'

import CachedStation from './CachedStation'
import CachedUrl from './CachedUrl'

export default class Station {

	static find(searchFor){
		return new Promise((resolve, reject) => {
			(async () => {
				try {
					searchFor = searchFor.toLowerCase()
					let stations = []

					// Is searchFor in URL database?
					if( await CachedUrl.exists(searchFor) ) {
						console.log("Fetch from internal DB")
						stations = await CachedStation.search(searchFor)
						resolve(stations)
					}
					else {
						console.log("Rely request to external API")
						stations = await ExternalStation.find(searchFor)
						console.log("Return external data")
						resolve(stations)
						CachedUrl.insert(searchFor, stations)
						CachedStation.insert(stations)
					}
				} catch (error) {
					reject(error)
				}
			})();
		})
	}
}
