import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Notes, Home, Star, Event, ListAlt } from '@material-ui/icons';

import classes from "./Menu.module.scss";

const Menu = (props) => {
	let value = "Home";

	const setValue = (val) => {

	};
	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			showLabels
			className={classes.NavigationMenu}
		>
			<BottomNavigationAction className={classes.NavigationMenuItem} label="Home" icon={<Home />} />
			<BottomNavigationAction className={classes.NavigationMenuItem} label="Notes" icon={<Notes />} />
			<BottomNavigationAction className={classes.NavigationMenuItem} label="Tasks" icon={<ListAlt />} />
			<BottomNavigationAction className={classes.NavigationMenuItem} label="Goals" icon={<Star />} />
			<BottomNavigationAction className={classes.NavigationMenuItem} label="Calendar" icon={<Event />} />
		</BottomNavigation>
	);
}

export default Menu;
