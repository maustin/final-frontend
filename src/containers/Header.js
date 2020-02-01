import React from 'react';
import NavBarBackground from '../components/NavBarBackground';
import NavBarBody from '../components/NavBarBody';

// TODO: Nix this and NavBarBackground - just have NavBarBody as the header
const Header = props =>
	<header>
		<NavBarBackground />
		<NavBarBody
			setDark={props.setDark}
			setLight={props.setLight}
			currentUser={props.currentUser}
			logout={props.logout}
			setLight={props.setLight}
			setDark={props.setDark} />
	</header>

export default Header;