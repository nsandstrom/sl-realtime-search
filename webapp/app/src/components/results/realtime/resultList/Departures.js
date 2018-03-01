// src/components/CompletedPage/ShowOne.js
import React from 'react';
import Departure from './Departure'


export default class Departures extends React.Component {
	constructor(props) {
		super(props);
		this.state = { };

		// this.submitCallback = this.submitCallback.bind(this);
	}

	render() {

		let departures = this.props.departures.map((departure, key) => {
			return (
				<Departure key={key} departure={departure}/>
			)
		})
		return (
				<div className="departureList">
					{departures}
				</div>
		);
	}
}
