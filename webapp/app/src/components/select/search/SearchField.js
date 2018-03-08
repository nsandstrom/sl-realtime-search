// src/components/CompletedPage/ShowOne.js
import React from 'react';


export default class SearchField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}

	componentDidMount() {
	}

	render() {

		return (
			<div>
				<input type="text"
					value={this.props.searchFor}
					onChange={this.props.handleChange}
					onClick={this.props.handleClick}
				/>
			</div>
		);
	}
}
