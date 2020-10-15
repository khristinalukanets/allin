import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
	events: [],
	loading: false
};


export const addEvent = ( event ) => {
	return {
		type: actionTypes.ADD_EVENT,
		newEvent: event
	};
};

export const changeEvent = ( event ) => {
	return {
		type: actionTypes.CHANGE_EVENT,
		event: event
	};
};

export const removeEvent = ( id ) => {
	return {
		type: actionTypes.REMOVE_EVENT,
		eventId: id
	};
};

const fetchEventsStart = ( state, action ) => {
	return updateObject( state, { loading: true } );
};

const fetchEventsSuccess = ( state, action ) => {
	return updateObject( state, {
		events: action.events,
		loading: false
	} );
};

const fetchEventsFail = ( state, action ) => {
	return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case actionTypes.FETCH_EVENTS_START: return fetchEventsStart( state, action );
		case actionTypes.FETCH_EVENTS_SUCCESS: return fetchEventsSuccess( state, action );
		case actionTypes.FETCH_EVENTS_FAIL: return fetchEventsFail( state, action );
		case actionTypes.ADD_EVENT: return addEvent( state, action );
		case actionTypes.REMOVE_EVENT: return removeEvent(state, action);
		default: return state;
	}
};

export default reducer;
