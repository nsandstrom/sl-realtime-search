// src/components/CompletedPage/ShowOne.js
import React from 'react';

import Select from './Select';
import Result from './Result';


export default class EditPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { searchType: "", searchData: {} };

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
	}

	handleSubmit(searchType, searchData) {
		this.setState({searchType: searchType, searchData: searchData});
	}

	render() {

		return (
			<div className="App-body">
				<div className="sidebar">
		         	<Select handleSubmit={this.handleSubmit} />
		        </div>
		        <div className="result">
		        	<Result searchType={'realtime'} searchData={this.state.searchData} />
	        	</div>
	        </div>
		);
	}
}
