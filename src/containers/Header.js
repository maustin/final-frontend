import React from 'react';
import NavBarBackground from '../components/NavBarBackground';
import NavBarBody from '../components/NavBarBody';

const Header = props =>
	<header>
		<NavBarBackground />
		<NavBarBody
			currentUser={props.currentUser}
			logout={props.logout} />
	</header>

export default Header;