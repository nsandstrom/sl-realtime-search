const _config = require('./default.json')
var config = { ... _config }

if (process.env.NODE_ENV === 'production')
	config = require('./production.json')

if (process.env.NODE_ENV === 'development')
	config = require('./development.json')

if (process.env.NODE_ENV === 'test')
	config = require('./test.json')

exports.db = function(){
	let db = {}
	let endpoint = config.db.endpoint || _config.db.endpoint
	let port = config.db.port || _config.db.port
	let name = config.db.name || _config.db.name
	db.connection_string = `mongodb://${endpoint}:${port}/${name}`
	return db
}()

exports.api_endpoint = config.api_endpoint || _config.api_endpoint
exports.api_keys = config.api_keys || _config.api_keys
