import React from "react";
import { Notes, Home, Star, Event, ListAlt } from '@material-ui/icons';
import { NavLink } from "react-router-dom";

import classes from "./Menu.module.scss";

const Menu = (props) => {
	let value = "Home";

	const setValue = (val) => {

	};
	return (
		<div
			className={classes.NavigationMenu}
		>
			<NavLink to={"/"} exact className={classes.NavigationMenuItem}>
				<div><Home/></div>
				<div>Home</div>
			</NavLink>
			<NavLink to={"/notes"} className={classes.NavigationMenuItem}>
				<div><Notes/></div>
				<div>Notes</div>
			</NavLink>
			<NavLink to={"/tasks"} className={classes.NavigationMenuItem}>
				<div><ListAlt/></div>
				<div>Tasks</div>
			</NavLink>
			<NavLink to={"/goals"} className={classes.NavigationMenuItem}>
				<div><Star/></div>
				<div>Goals</div>
			</NavLink>
			<NavLink to={"/calendar"} className={classes.NavigationMenuItem}>
				<div><Event/></div>
				<div>Calendar</div>
			</NavLink>
		</div>
	);
}

export default Menu;
