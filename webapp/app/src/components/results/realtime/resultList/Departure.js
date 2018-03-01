// src/components/CompletedPage/ShowOne.js
import React from 'react';
// import Realtime from './results/Realtime'


export default class Departure extends React.Component {
	constructor(props) {
		super(props);
		this.state = { };

		// this.submitCallback = this.submitCallback.bind(this);
	}

	render() {
		let departure = this.props.departure
		let deviationField = ( <div />)
		if((departure.Deviations || []).length > 0){
			var dev_messages = ""
			console.log(departure.Deviations)
			departure.Deviations.forEach(deviation => {
				dev_messages += deviation.Text + "\n"
			})
			console.log(dev_messages)
			deviationField = (
					<div className="departureDeviation" title={dev_messages}> ! </div>
				)
		}
		return (
				<div className="departureItem">
					<div className="departureLineNumber"> {departure.LineNumber} </div>
					<div> {departure.Destination} </div>
					{deviationField}
					<div className="right">{departure.DisplayTime}</div>
				</div>
		);
	}
}
