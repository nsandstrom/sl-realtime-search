// src/components/CompletedPage/ShowOne.js
import React from 'react';

import {getDepartures} from 'Api';

import ResultList from './realtime/ResultList'


export default class Realtime extends React.Component {
	constructor(props) {
		super(props);
		this.state = { departures: {} };

		this.handleUpdate = this.handleUpdate.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.searchData.SiteId !== this.props.SiteId) {
			this.fetchDepartures(nextProps.searchData.SiteId)
		}
	}

	fetchDepartures(SiteId){
		getDepartures(SiteId).then(departures => {
			this.setState({departures})
		})
	}

	handleUpdate(){
		console.log(this.props)
		if (this.props.searchData.SiteId) {
			this.fetchDepartures(this.props.searchData.SiteId)
		}
	}

	render() {
		return (
			<div className="RealtimeResultSection">
				<h3 onClick={this.handleUpdate}> Realtime results </h3>
				<ResultList departures={this.state.departures} />
			</div>
		);
	}
}
