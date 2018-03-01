// src/models/Led.js

'use strict';
import CachedUrlSchema from 'schemas/CachedUrlSchema'
var mongoose = require('mongoose')

mongoose.model('CachedUrl', CachedUrlSchema)
var DB = mongoose.model('CachedUrl')

export default class CachedUrl {

	static async exists(searchFor){
		try {
			let match = await DB.findOne({Url: searchFor})
			return match ? true : false

		} catch(err) {
			console.log(err)
			return false
		}
	}

	static insert = async function(url, stations) {
		try {
			let cached_url = { Url: url, expires: new Date(), stations: stations }
			DB.collection.update({Url:cached_url.Url}, cached_url, {upsert: true})

		} catch(err) {
			let errorMsg = err.message || "DB Create Error"
			console.log(errorMsg)
		}
	}
}
