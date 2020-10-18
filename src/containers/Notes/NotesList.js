import React from 'react';
import { GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import classes from './NotesList.module.scss';

const NotesList = props => {
	return (
		<GridList cols={0} spacing={10} className={classes.NotesList}>
			{props.items.map(item => (
				<GridListTile key={item.id} className={classes.NotesListItem}>
					<div className={classes.NoteBody}>{item.body}</div>
					<GridListTileBar
						className={classes.NoteToolbar}
						titlePosition="bottom"
						actionPosition="right"
						actionIcon={
							<IconButton
								className={classes.NoteDeleteButton}
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
