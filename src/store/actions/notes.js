import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchNotesSuccess = ( notes ) => {
    return {
        type: actionTypes.FETCH_NOTES_SUCCESS,
        notes: notes
    };
};

export const fetchNotesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_NOTES_FAIL,
        error: error
    };
};

export const fetchNotesStart = () => {
    return {
        type: actionTypes.FETCH_NOTES_START
    };
};

export const fetchNotes = () => {
    return dispatch => {
        dispatch(fetchNotesStart());
        axios.get( '/notes.json')
            .then( res => {
                const fetchedNotes = [];
                for ( let key in res.data ) {
                    fetchedNotes.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchNotesSuccess(fetchedNotes));
            } )
            .catch( err => {
                dispatch(fetchNotesFail(err));
            } );
    };
};


export const addNote = ( note, notes ) => {
    return dispatch => {
        axios.post('/notes.json', note)
            .then(res => {
                dispatch(fetchNotesSuccess([...notes, {
                    ...note,
                    id: res.data.name
                }]));
            });
    }
};

export const removeNote = (noteId, notes) => {
    return dispatch => {
        axios.delete('/notes/' + noteId + '.json')
            .then(() => {
                dispatch(fetchNotesSuccess(notes.filter(note => note.id !== noteId)))
            });
    }
};
