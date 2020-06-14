import React from 'react';

import classes from './Layout.module.scss';
import Grid from "@material-ui/core/Grid";
import Aux from "../Aux/Aux";
import Header from "../../components/Header/Header";
import Menu from "../../containers/Menu/Menu";

const Layout = (props) => {
	return (
		<Aux>
			<Header/>
			<Grid container className={classes.Content}>
				<Grid md={2}>
					<Menu />
				</Grid>
				<Grid item xs={10} md={7}>
					{props.children}
				</Grid>
			</Grid>
		</Aux>
	)
}

export default Layout;
