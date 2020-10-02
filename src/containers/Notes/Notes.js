import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-notes';
import * as actions from '../../store/actions/index';
import { Button } from '@material-ui/core';
import NotesList from "./NotesList";

import './Notes.css';

const Notes = (props) => {
	useEffect(() => {
		props.onFetchNotes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [newNote, setNewNote] = useState("");

	const submitHandler = event => {
		event.preventDefault();
		addNote();
	};

	const addNote = () => {
		props.onAddNote( { body: newNote }, props.notes);
	};

	const removeNoteHandler = noteId => {
		props.onRemoveNote( noteId, props.notes);
	};

	return (
		<div className="notes-page">
			<h2>Notes</h2>
			<form onSubmit={submitHandler}>
				<textarea
					rows={6}
					onChange={event => {
						setNewNote(event.target.value);
					}}
				>
				</textarea>
				<div>
					<Button variant="contained" color="primary" onClick={addNote}>
						Add note
					</Button>
				</div>
			</form>
			<NotesList items={props.notes} onRemoveItem={removeNoteHandler} />
		</div>
	);
};


const mapStateToProps = state => {
	return {
		notes: state.notes.notes,
		loading: state.notes.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchNotes: () => {
			dispatch(actions.fetchNotes());
		},
		onAddNote: (newNote, notes) => {
			dispatch(actions.addNote(newNote, notes));
		},
		onRemoveNote: (noteId, notes) => {
			dispatch(actions.removeNote(noteId, notes));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(Notes, axios));
