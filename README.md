# SL Realtime data
This is a web app in development, which lists upcoming departures from a selected station.  
A similar and more advanced service is already availible at SL.SE, but it is annoyingly slow.
I want to be able to check train times in the morning, without actually missing trains in the process.

---
## Services
This project consists of the following
- A NodeJS backend which interacts with SL Api's
- A MongoDB database, where stations an searches are cached
- A simple webapp written in ReactJs

---
### Run with docker
Docker and compose files are provided.  
Create a /src/config/development.json for both backend and webapp.  
Start in development with

    docker-compose up


---
### Deploy with docker
Docker and compose files are provided.  
Create a /src/config/production.json for both backend and webapp.  
Start in development with

    docker-compose -f docker-compose.yml -f docker-compose.production.yml build
    docker-compose -f docker-compose.yml -f docker-compose.production.yml up


---
### External API's
API-keys are provided by http://www.trafiklab.se.  
realtime: SL Realtidsinformation 4  
stations: SL Platsuppslag  
