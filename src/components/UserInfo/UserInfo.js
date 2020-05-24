import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { teal } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(0),
		}
	},
	orange: {
		color: theme.palette.getContrastText(teal[50]),
		backgroundColor: teal[50],
		padding: '5px'
	},
}));

export default function UserInfo() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange}>
				Kh
			</Avatar>
		</div>
	);
}
