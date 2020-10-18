import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios';
import * as actions from '../../store/actions/index';
import { Button } from '@material-ui/core';
import NotesList from "./NotesList";

import classes from './Notes.module.scss';

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
		setNewNote("");
	};

	const removeNoteHandler = noteId => {
		props.onRemoveNote( noteId, props.notes);
	};

	return (
		<div className={classes.NotesPage}>
			<h2>Notes</h2>
			<form onSubmit={submitHandler}>
				<textarea
					rows={6}
					value={newNote}
					onChange={event => {
						setNewNote(event.target.value);
					}}
				>
				</textarea>
				<div>
					<Button className={classes.NoteAddButton} variant="contained" color="primary" onClick={addNote}>
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
