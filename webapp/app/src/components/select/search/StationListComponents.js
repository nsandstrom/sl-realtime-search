// src/components/CompletedPage/ShowOne.js
import React from 'react';
import Station from './StationList/Station'



export default class StationListComponents extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  };
		this.hasFocus = null

		this.handleChange = this.handleChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.handleLostFocus = this.handleLostFocus.bind(this);
	}

	componentDidMount() {
	}

	handleChange(event) {

	}

	handleSelect(stationName) {
		this.props.handleSelect(stationName)
	}

	handleLostFocus() {

	}

	render() {
		var stations = []
		if(this.props.isSelected == false){
			stations = this.props.stations.map((station, i) => {
				return(
					<Station key={i} station={station} handleSelect={this.handleSelect} />
				)
			});
		}
		return (
			<div className="station_list">
	            {stations}
			</div>
		);
	}
}
