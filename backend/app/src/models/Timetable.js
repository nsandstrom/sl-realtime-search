// src/models/Led.js

'use strict';

import ApiCall from '../ApiCall'
import Config from 'config'

const api_key = Config.api_keys.realtime
const base_url = "https://api.sl.se/api2/realtimedeparturesV4.json?"

export default class Timetable {

	static async realtime(station_id){
		let url = base_url
		url += `key=${api_key}`
		url += `&SiteId=${station_id}`
		url += `&TimeWindow=60`

		console.log("ask trafiklab for realtime of %s", station_id)
		let results
		results = await ApiCall.get(url)
		// console.log(results)

		// fake data
		// results = {
		// 	ResponseData: {
		// 		Trains: [
		// 			{ JourneyDirection: 2, LineNumber: 40, Destination: "Tumba", DisplayTime: "5 min", TimeTabledDateTime: "2018-01-29T07:08:00", ExpectedDateTime: "2018-01-29T07:08:00" },
		// 			{ JourneyDirection: 2, LineNumber: 40, Destination: "Södertälje", DisplayTime: "9 min", TimeTabledDateTime: "2018-01-29T07:10:00", ExpectedDateTime: "2018-01-29T07:12:00" },
		// 			{ JourneyDirection: 1, LineNumber: 40, Destination: "Märsta", DisplayTime: "9 min", TimeTabledDateTime: "2018-01-29T07:10:00", ExpectedDateTime: "2018-01-29T07:12:00", Deviations: [
		// 				{ "Text": "Inställd", "Consequence": "CANCELLED", "ImportanceLevel": 0 },
		// 				{ "Text": "Extra dyr biljett", "Consequence": "INFORMATION", "ImportanceLevel": 3 }
		// 			]  },
		// 		]
		// 	}
		// }

		let trains = results.ResponseData.Trains
		Timetable.parseDeviations(trains)

		// Arrange directions JourneyDirection
		let departures = { "1": { headers: [], departures: [] }, "2": { headers: [], departures: [] } }
		trains.map(departure => {
			let direction = departure.JourneyDirection
			departures[direction].departures.push(departure)
			if ( !departures[direction].headers.includes(departure.Destination) ){
				departures[direction].headers.push(departure.Destination)
			}

		})
		return departures
	}

	static parseDeviations(departures){
		departures.forEach(departure => {
			if (departure.Deviations == null) return
			departure.Deviations.map( deviation => {
				console.log(deviation)
				if (deviation.Consequence == "CANCELLED") {
					departure.DisplayTime = "Inställd"
				}
			})
		})
	}
}

// "Deviations": Array[1][
//           {
//             "Text": "Inställd",
//             "Consequence": "CANCELLED",
//             "ImportanceLevel": 0
//           }
//         ]
