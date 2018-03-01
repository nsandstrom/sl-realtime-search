// src/models/Led.js

'use strict';
import CachedStationSchema from 'schemas/CachedStationSchema'
var mongoose = require('mongoose')

mongoose.model('CachedStation', CachedStationSchema)
var DB = mongoose.model('CachedStation')

export default class CachedStation {

	static async search(searchFor){
		try {
			searchFor = searchFor.toLowerCase()
			let matches = []

			if ( searchFor.length < 3 ){
				searchFor = searchFor.replace(" ", ".*")
				matches = await DB.find({Name: {'$regex': searchFor, '$options': 'i'}})
			}
			else {

				let n_grams = CachedStation.make_ngrams( searchFor )

				matches = await DB
				.find( { $text: { $search : n_grams } },
				  { score : { $meta: "textScore" }, Name: 1, SiteId: 1, X:1, Y:1 } )
				.sort( {
				  score: { $meta : "textScore" }
				} )
				.limit( 10 )
			}

			return matches

		} catch(err) {
			console.log("DB fetch error")
			console.log(err)
			return false
		}
	}

	static insert = function(stations) {
		console.log("Start caching stations")
		try {
			stations.map(station => {
				let cached_station = { ... station }
				cached_station.expires = new Date()
				cached_station.n_grams = CachedStation.make_ngrams( station.Name )
				DB.collection.update({Name: station.Name, SiteId: station.SiteId}, cached_station, {upsert: true}).then(function(res){
					console.log("cached - %s",  station.Name)
				})

			})
		} catch(err) {
			let errorMsg = err.message || "DB Create Error"
			console.log(errorMsg)
		}
	}

	static make_ngrams(word, min_size=3, max_size=4) {
		if (word.length < min_size)
			return word
		// Convert 'word' into ['wor', 'ord', 'word']
		word = word.toString()
		word = word.toLowerCase()
		word = word.replace(/[^a-öA-Ö0-9]/g,'');
		word = word.replace('ö','o');
		word = word.replace('å','a');
		word = word.replace('ä','a');
		word = word[0] + word
		let length = word.length

		let range_max = Math.max(length, min_size)
		range_max = Math.min(range_max, max_size)
		let n_grams = []

		let size_range = Array(range_max - min_size + 1).fill(min_size).map((x, y) => x + y)
		// console.log(size_range)
		size_range.map(gram_length => {
			// console.log("Current size %s", gram_length)
			if(gram_length > length) return
			// console.log("make this")
			for(let start = 0; start < length - gram_length + 1; start++){
				let gram = word.substring(start, start + gram_length)
				n_grams.push(gram)
				// console.log(gram)
			}
		})

		return n_grams.join(" ")
	}
}
