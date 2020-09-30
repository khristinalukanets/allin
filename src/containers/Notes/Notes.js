import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import NotesList from "./NotesList";

import './Notes.css';

const Notes = () => {
	const [notes, setNote] = useState([]);
	const [newNote, setNewNote] = useState("");

	const submitHandler = event => {
		event.preventDefault();
		addNote();
	};

	const addNote = () => {
		setNote(prevNotes => [
			...prevNotes,
			{ id: Math.random().toString(), body: newNote }
		]);
	};

	const removeNoteHandler = noteId => {
		setNote(prevNotes => prevNotes.filter(item => item.id !== noteId));
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
			<NotesList items={notes} onRemoveItem={removeNoteHandler} />
		</div>
	);
};

export default Notes;
