import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import withAuth from './helpers/withAuth';
import EventsPage from './pages/events';
import AuthPage from './pages/auth';

const MainPage = () => {
	return (
		<div>
			<p>o0Oo0o 3ntryw4y o0oO0o</p>
			<br/>
			<Link to='/events'>Go to events</Link>
			<br/><br/>
			<Link to='/auth'>Login or signup</Link>
		</div>
	);
}

class App extends Component {
  render() {
    return (
    	<Switch>
    		<Route exact path='/auth' component={AuthPage} />
    		<Route exact path='/events' component={withAuth(EventsPage)} />
    		<Route exact path='/' component={MainPage} />
    	</Switch>
    );
  }
}

export default App;
