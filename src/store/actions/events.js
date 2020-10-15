import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchEventsSuccess = ( events ) => {
	return {
		type: actionTypes.FETCH_EVENTS_SUCCESS,
		events: events
	};
};

export const fetchEventsFail = ( error ) => {
	return {
		type: actionTypes.FETCH_EVENTS_FAIL,
		error: error
	};
};
export const fetchEventsStart = () => {
	return {
		type: actionTypes.FETCH_EVENTS_START
	};
};

export const fetchEvents = () => {
	return dispatch => {
		dispatch(fetchEventsStart());
		axios.get( '/events.json')
			.then( res => {
				const fetchedEvents = [];
				for ( let key in res.data ) {
					fetchedEvents.push( {
						...res.data[key],
						id: key
					} );
				}
				dispatch(fetchEventsSuccess(fetchedEvents));
			} )
			.catch( err => {
				dispatch(fetchEventsFail(err));
			} );
	};
};


export const addEvent = ( event, events ) => {
	return dispatch => {
		axios.post('/events.json', event)
			.then(res => {
				dispatch(fetchEventsSuccess([...events, {
					...event,
					id: res.data.name
				}]));
			});
	}
};

export const changeEvent = ( event, events ) => {
	return dispatch => {
		axios.put('/events/' + event.id + '.json', event)
			.then(res => {
				dispatch(fetchEventsSuccess(events.map(event => event.id === res.data.id ? res.data : event)));
			});
	}
};

export const removeEvent = (eventId, events) => {
	return dispatch => {
		axios.delete('/events/' + eventId + '.json')
			.then(() => {
				dispatch(fetchEventsSuccess(events.filter(event => event.id !== eventId)))
			});
	}
};
