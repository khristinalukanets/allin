import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
    notes: [],
    loading: false
};


export const addNote = ( note ) => {
    return {
        type: actionTypes.ADD_NOTE,
        newNote: note
    };
};

export const removeNote = ( id ) => {
    return {
        type: actionTypes.REMOVE_NOTE,
        noteId: id
    };
};

const fetchNotesStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchNotesSuccess = ( state, action ) => {
    return updateObject( state, {
        notes: action.notes,
        loading: false
    } );
};

const fetchNotesFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_NOTES_START: return fetchNotesStart( state, action );
        case actionTypes.FETCH_NOTES_SUCCESS: return fetchNotesSuccess( state, action );
        case actionTypes.FETCH_NOTES_FAIL: return fetchNotesFail( state, action );
        case actionTypes.ADD_NOTE: return addNote( state, action );
        case actionTypes.REMOVE_NOTE: return removeNote(state, action);
        default: return state;
    }
};

export default reducer;
