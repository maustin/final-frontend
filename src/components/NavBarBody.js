import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from './Button';

class NavBarBody extends React.Component {
	login = () => {
		this.props.history.push('/login');
	}

	register = () => {
		this.props.history.push('/register');
	}

	profile = () => {
		this.props.history.push('/profile');
	}

	cart = () => {
		this.props.history.push('/cart');
	}

	home = () => {
		this.props.push('/');
	}

	render() {
		let authButtons = [];
		if (this.props.currentUser) {
			authButtons.push(
				<Button text='Sign Out' onClick={this.props.logout} />,
				<Button text='Profile' onClick={this.profile} />
			);
		}
		else {
			authButtons.push(
				<Button text='Sign In' onClick={this.login} />,
				<Button text='Register' onClick={this.register} />
			);
		}

		return (
			<div className='navbar-body'>
				<div className='navbar-body-title'>
					"Honest" Gar's Starship Surplus
				</div>
				<div style={{'flexGrow': 1}} />
				{authButtons}
				<Button text='Cart' onClick={this.cart} />
			</div>
		);
	}
}

export default withRouter(NavBarBody);