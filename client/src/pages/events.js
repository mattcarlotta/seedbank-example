import React from 'react';
import { Link } from 'react-router-dom';
import EventCreate from '../components/EventCreate';
import EventList from '../components/EventList';

const EventsPage = () => {
	return (
		<div>
			<EventCreate/>
			<EventList/>
			<br/><br/>
			<Link to='/'>Back to entryway</Link>
		</div>
	);
}

export default EventsPage;
