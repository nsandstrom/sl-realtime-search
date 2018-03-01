// src/components/CompletedPage/ShowOne.js
import React from 'react';


export default class Station extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  };
		this.hasFocus = null

		this.handleSelect = this.handleSelect.bind(this);
	}

	componentDidMount() {
	}

	handleSelect(event) {
		this.props.handleSelect(this.props.station.Name)
	}

	render() {

		return (
			<div className="station_suggestion">
				<p onClick={this.handleSelect}> {this.props.station.Name} </p>
			</div>
		);
	}
}
