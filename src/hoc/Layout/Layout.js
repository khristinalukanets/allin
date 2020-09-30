import React from 'react';

import classes from './Layout.module.scss';
import Grid from "@material-ui/core/Grid";
import Aux from "../Aux/Aux";
import Header from "../../components/Header/Header";
import Menu from "../../containers/Menu/Menu";
import Home from "../../containers/Home/Home";
import Tasks from "../../containers/Tasks/Tasks";
import Calendar from "../../containers/Calendar/Calendar";
import Goals from "../../containers/Goals/Goals";
import Notes from "../../containers/Notes/Notes";
import {Route} from "react-router";


const Layout = (props) => {
	return (
		<Aux>
			<Header/>
			<Grid container className={classes.Content}>
				<Grid item md={2}>
					<Menu/>
				</Grid>
				<Grid item md={10}>
					<Route path="/" exact component={Home}/>
					<Route path="/tasks" exact component={Tasks}/>
					<Route path="/goals" exact component={Goals}/>
					<Route path="/calendar" exact component={Calendar}/>
					<Route path="/notes" exact component={Notes}/>
				</Grid>
			</Grid>
		</Aux>
	)
}

export default Layout;
