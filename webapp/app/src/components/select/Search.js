// src/components/CompletedPage/ShowOne.js
import React from 'react';

import {findStations} from 'Api';
import SearchField from './search/SearchField'
import StationListComponents from './search/StationListComponents'

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = { searchFor: "", matches: [], isSelected: false };

		this.handleChangeSearchFor = this.handleChangeSearchFor.bind(this);
		this.handleSelectStation = this.handleSelectStation.bind(this);
		this.handleSearchFieldClick = this.handleSearchFieldClick.bind(this);
		// this.handleChangeSelectedStation = this.handleChangeSelectedStation.bind(this);
		this.updateStationList = this.updateStationList.bind(this);

		this.timer = null;
	}

	componentDidMount() {
	}

	handleChangeSearchFor(event) {
		clearTimeout(this.timer)
		this.setState({searchFor: event.target.value, isSelected: false});
		if(event.target.value !== "") this.timer = setTimeout(this.updateStationList, 500)
	}

	handleSelectStation(stationName) {
		let matched = false
		this.state.matches.forEach((match) => {
        	if(match.Name == stationName) matched = match.SiteId
		})
		if(matched != false){
        	document.activeElement.blur();
        	this.setState({searchFor: stationName, isSelected: true});
        	let searchData = {SiteId: matched}
			this.props.handleSubmit('realtime', searchData)
        	return 0
        }

        clearTimeout(this.timer)
		this.setState({searchFor: stationName});
		if(stationName != "") this.timer = setTimeout(this.updateStationList, 500)

		// if()
	}

	handleSearchFieldClick(){
		if(this.state.isSelected){
			this.setState({ isSelected: false })
		}
	}

	updateStationList(){
		findStations(this.state.searchFor).then(matches => {
			this.setState({matches: matches})
		})

	}

	render() {
		return (
			<div>
				<SearchField
					searchFor={this.state.searchFor}
					handleChange={this.handleChangeSearchFor}
					handleClick={this.handleSearchFieldClick}
				/>
				<StationListComponents
					stations={this.state.matches}
					handleSelect={this.handleSelectStation}
					isSelected={this.state.isSelected}
				/>
			</div>
		);
	}
}
