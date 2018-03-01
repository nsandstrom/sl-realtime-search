const _config = require('./default.json')
var config = { ... _config }

if (process.env.NODE_ENV === 'production')
	config = require('./production.json')

if (process.env.NODE_ENV === 'development')
	config = require('./development.json')

if (process.env.NODE_ENV === 'test')
	config = require('./test.json')

exports.api = config.api || _config.api
