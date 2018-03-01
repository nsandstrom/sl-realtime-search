// models/orderModel.js
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CachedStationSchema = new Schema({
	SiteId: {
		type: Number,
		required: 'Id must be provided'
	},
	Name: {
		type: String,
		required: 'Name must be provided'
	},
	X: {
		type: Number
	},
	Y: {
		type: Number
	},
	n_grams: {
		type: String,
		required: 'Name must be provided'
	},
	expires: {
		type: Date,
		default: Date.now,
		expires: '10m',
		required: 'Exp must be provided'
    }
});

CachedStationSchema.index({ Name: 1, SiteId: 1}, { "name": "uni_name_siteid_", "unique": true })
CachedStationSchema.index({ n_grams: 'text' }, { default_language: "swedish" });

export default CachedStationSchema = CachedStationSchema
