// src/components/CompletedPage/ShowOne.js
import React from 'react';
import Direction from './resultList/Direction'


export default class ResultList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { departures: {} };

		// this.submitCallback = this.submitCallback.bind(this);
	}

	componentDidMount() {
		this.setState({departures: this.props.departures})
	}

	render() {
		let directions = []
		directions = Object.values(this.props.departures).map( (direction, index) => {
			return(
				<Direction key={index} direction={direction}/>
			)
		})

		return (
				<div>
					{directions}
				</div>
		);
	}
}
