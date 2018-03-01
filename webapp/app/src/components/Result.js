// src/components/CompletedPage/ShowOne.js
import React from 'react';
import Realtime from './results/Realtime'


export default class Result extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  };
		// this.submitCallback = this.submitCallback.bind(this);
	}

	render() {
		let results = undefined
		if(this.props.searchType === 'realtime'){
			results = <Realtime searchData={this.props.searchData}/>
		}

		return (
			<div>
				{results}
			</div>
		);
	}
}
