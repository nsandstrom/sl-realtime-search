// models/orderModel.js
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CachedUrlSchema = new Schema({
	Url: {
		type: String,
		required: 'Url must be provided'
	},
	expires: {
		type: Date,
		default: Date.now,
		expires: '9m',
		required: 'Exp must be provided'
    }
});

CachedUrlSchema.index({ "Url": 1}, { "name": "uni_url_", "unique": true })

export default CachedUrlSchema = CachedUrlSchema
