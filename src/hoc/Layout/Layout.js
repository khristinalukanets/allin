import React from 'react';

import classes from './Layout.module.scss';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function Layout(props) {
	return (
		<Container>
			<header className={classes.Header}>
				My app header
			</header>
			<Grid container spacing={3} className={classes.Content}>
				<Grid item xs={2} md={5}>
					App menu
				</Grid>
				<Grid item xs={10} md={7}>
					{props.children}
				</Grid>
			</Grid>
		</Container>
	)
}

export default Layout;
