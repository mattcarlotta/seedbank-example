import React, { Component } from 'react';
import axios from 'axios';

class AuthSignup extends Component {

	constructor(props) {
		super(props);
		this.state = {username: '', email: '', password: ''};
		this.handleChange = this.handleChange.bind(this);
		this.signup = this.signup.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	signup(e) {
		e.preventDefault();
		axios.post('/api/auth/signup', {
			email: this.state.email,
			password: this.state.password,
			username: this.state.username
		})
		.then(res => {
			if (res.status === 200) {
				localStorage.setItem('token', res.data.token);
			}
		})
	 	.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<form onSubmit={this.signup}>
		          <label>Need to signup?
		          	<br/><br/>
		          	<input type="text" name="username" placeholder="username" value={this.state.value} onChange={this.handleChange}/>
		          	<input type="text" name="email" placeholder="email" value={this.state.value} onChange={this.handleChange}/>
		          	<input type="text" name="password" placeholder="password" value={this.state.value} onChange={this.handleChange}/>
		          </label>
		          <br/>
			      <input type="submit" value="Signup"/>
			    </form>
			</div>
		)
	}
}

export default AuthSignup;