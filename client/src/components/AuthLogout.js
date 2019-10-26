import React, { Component } from 'react';

class AuthLogout extends Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
	}

	logout(e){
		localStorage.clear();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.logout}>
			      <input type="submit" value="Logout"/>
			    </form>
			</div>
		)
	}
}

export default AuthLogout;