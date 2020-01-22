import React from 'react';
import { API_URL } from '../utils/Constants';
import Button from '../components/Button';

class LoginPage extends React.Component {
	state = {
		submitted: false,
		email: '',
		password: '',
		error: ''
	}

	onSubmitClick = event => {
		event.preventDefault();
		this.setState({ submitted: true });
		let user = {
			email: this.state.email,
			password: this.state.password
		};

		fetch(`${API_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		.then(response => response.json())
		.then(data => {
			console.log('Login result:', data);
			if (data.status === 200) {
				this.props.setCurrentUser(data.signedJwt);
				this.props.history.push('/');
			}
			else
				this.setState({ submitted: false, error: data.message });
		})
		.catch(err => {
			console.log('Login error:', err);
			this.setState({ submitted: false, error: err });
		});
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		let pageStyle = {};
		if (this.state.submitted) {
			pageStyle.pointerEvents = 'none';
			pageStyle.opacity = 0.5;
		}

		return (
			<div style={pageStyle}>
				<h2>Sign In</h2>

				<h5>Email</h5>
				<input
					type='email'
					name='email'
					className='text-input'
					value={this.state.email}
					onChange={this.handleChange}
					placeholder="gar@example.com" />

				<h5>Password</h5>
				<input
					type='password'
					name='password'
					className='text-input'
					value={this.state.password}
					onChange={this.handleChange} />

				<Button
					text='Submit'
					onClick={this.onSubmitClick} />
			</div>
		);
	}
}

export default LoginPage;