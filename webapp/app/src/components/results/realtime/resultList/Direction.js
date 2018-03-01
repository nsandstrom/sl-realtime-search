// src/components/CompletedPage/ShowOne.js
import React from 'react';
import Header from './Header'
import Departures from './Departures'


export default class Direction extends React.Component {
	constructor(props) {
		super(props);
		this.state = { };

		// this.submitCallback = this.submitCallback.bind(this);
	}

	componentDidMount() {
	}

	render() {

		return (
				<div>
					<Header headers={this.props.direction.headers}/>
					<Departures departures={this.props.direction.departures}/>
				</div>
		);
	}
}
