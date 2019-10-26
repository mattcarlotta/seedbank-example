import React, { Component } from 'react';
import axios from 'axios';

class EventCreate extends Component {

	constructor(props) {
		super(props);
		this.state = {eventname: '', sponges: ''};
		this.handleChange = this.handleChange.bind(this);
		this.submit = this.submit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	submit(e) {
		e.preventDefault();
		axios.post('/api/events', {
			name: this.state.eventname,
			sponges: this.state.sponges
		})
	 	.then(event => { console.log('Created event: ' + event); })
	 	.catch(err => { console.log(err); })
	}

	render() {
		return (
			<form onSubmit={this.submit}>
	          <label>Create an event
	          	<br/><br/>
	          	<input type="text" name="eventname" placeholder="name" value={this.state.value} onChange={this.handleChange}/>
	          	<input type="text" name="sponges" placeholder="sponges" value={this.state.value} onChange={this.handleChange}/>	          
	          </label>
	          <br/>
		      <input type="submit" value="Create"/>
		    </form>
		)
	}
}

export default EventCreate;
