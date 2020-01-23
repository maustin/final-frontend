import React from 'react';
import NavBarBackground from '../components/NavBarBackground';
import NavBarBody from '../components/NavBarBody';

const Header = props =>
	<header>
		<NavBarBackground />
		<NavBarBody
			setDark={props.setDark}
			setLight={props.setLight}
			currentUser={props.currentUser}
			logout={props.logout} />
	</header>

export default Header;