# Departure API
Backend service for station search and fething of upcoming departures.  
Station searches are cached in a Mongo Database.
Currently only Trains (pendeltåg) are in use.

---
## Config
Make a copy of config/default.json, named 'development.json', 'production.json' or 'test.json'.

### Example config:
```
{
	"db": {
		"endpoint": "localhost",
		"port": 27017,
		"name": "sl-realtime"
	},

	"api_endpoint": {
		"port": 3000
	},

	"api_keys": {
		"realtime": "1234",
		"stations": "1234"
	}
}
```

---
## External API's
API-keys are provided by http://www.trafiklab.se.  
realtime: SL Realtidsinformation 4  
stations: SL Platsuppslag  
