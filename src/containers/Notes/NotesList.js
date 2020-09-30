import React from 'react';
import { GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import './NotesList.css';

const NotesList = props => {
	return (
		<GridList cols={0} spacing={10} className="notes-list">
			{props.items.map(item => (
				<GridListTile key={item.id} className="notes-list-item">
					<div className="note-body">{item.body}</div>
					<GridListTileBar
						className="note-toolbar"
						titlePosition="bottom"
						actionPosition="right"
						actionIcon={
							<IconButton
								className="note-delete-button"
								color="primary"
								aria-label="delete"
								component="span"
								onClick={props.onRemoveItem.bind(this, item.id)}
							>
								<DeleteIcon/>
							</IconButton>
						}>
					</GridListTileBar>
				</GridListTile>
			))}
		</GridList>
	);
};

export default NotesList;
