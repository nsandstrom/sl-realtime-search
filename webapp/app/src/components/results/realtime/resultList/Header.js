// src/components/CompletedPage/ShowOne.js
import React from 'react';
// import Realtime from './results/Realtime'


export default class Direction extends React.Component {
	constructor(props) {
		super(props);
		this.state = { };

		// this.submitCallback = this.submitCallback.bind(this);
	}

	render() {
		let headers = "Trains to"
		headers += this.props.headers.map(header => {
			return " " + header
		})
		return (
				<div className="directionHeader">
					{headers}
				</div>
		);
	}
}
