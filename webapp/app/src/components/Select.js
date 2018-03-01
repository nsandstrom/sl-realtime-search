// src/components/CompletedPage/ShowOne.js
import React from 'react';
import Search from './select/Search'


export default class Select extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  };

		// this.submitCallback = this.submitCallback.bind(this);
	}

	componentDidMount() {
	}

	render() {

		return (
			<div className="select-panel">
				This is where search is made
				<Search handleSubmit={this.props.handleSubmit} />
			</div>
		);
	}
}
