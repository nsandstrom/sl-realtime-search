// const API_ROOT = process.env.REACT_APP_API_ROOT
// import { API_ROOT } from './config';

import Config from 'config'
const API_ROOT = Config.api.host

export function findStations(searchFor) {
  return fetch(`${API_ROOT}/stations/find/${searchFor}`)
    .then(res => res.json())
    .then(json => json);
}

export function getDepartures(siteId) {
  return fetch(`${API_ROOT}/timetables/realtime/${siteId}`)
    .then(res => res.json())
    .then(json => json);
}
