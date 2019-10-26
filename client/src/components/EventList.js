import React, { Component } from 'react';
import axios from 'axios';

class EventList extends Component {

	constructor() {
		super();
		this.state = {
			events: []
		}
	}
	componentDidMount() {
		axios.get('/api/events')
			 .then(events => {
			 	this.setState({events: events.data})
			 })
			 .catch(err => console.log(err))
	}
	render() {
		var events = this.state.events;
		return (
			<div>
				<p>Events:</p>
				<ul>
					{ events.map(({ id, name, data }) => (
						<li key={id.toString()}>{name} {data}</li>
					))}
				</ul>
			</div>
		)
	}
}

export default EventList;
