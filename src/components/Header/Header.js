import React from "react";
import classes from './Header.module.scss';

import Logo from "../Logo/Logo";
import UserInfo from "../UserInfo/UserInfo";


function Header(props) {
	return (
		<header className={classes.Header}>
			<Logo />
			<UserInfo />
		</header>
	);
}

export default Header;
