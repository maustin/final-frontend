import React from 'react';
import { API_URL } from '../utils/Constants';
import Button from '../components/Button';

class RegisterPage extends React.Component {
	state = {
		submitted: false,
		email: '',
		username: '',
		password: '',
		password2: '',
		homeworld: '',
		errors: [],
	}

	onSubmitClick = event => {
		event.preventDefault();
		this.setState({ submitted: true });

		let newUser = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2,
			homeworld: this.state.homeworld,
		};

		fetch(`${API_URL}/v1/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser)
		})
		.then(response => response.json())
		.then(data => {
			console.log('Register response:', data);
			if (data.status === 201)
				this.props.history.push('/login');
			else {
				// Data will contain either a single 'message' string or
				// an 'errors' array of objects with a 'message' property.
				let errors;
				if (data.errors)
					errors = data.errors;
				else
					errors = [{ 'message': data.message }];

				console.log(errors);
				this.setState({ submitted: false, errors: errors });
			}
		})
		.catch(error => {
			console.log('Register error:', error);
			this.setState({ submitted: false, errors: error });
		})
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
				<h2>Register</h2>

				<h5>Username</h5>
				<h6>This is your public-facing identity</h6>
				<input
					type='text'
					name='username'
					className='text-input'
					value={this.state.username}
					onChange={this.handleChange} />

				<h5>Email</h5>
				<input
					type='email'
					name='email'
					className='text-input'
					value={this.state.email}
					onChange={this.handleChange}
					placeholder="gar@example.com" />

				<h5>Homeworld</h5>
				<h6>Used for tax purposes, totally not for marketing</h6>
				<input
					type='text'
					name='homeworld'
					className='text-input'
					value={this.state.homeworld}
					onChange={this.handleChange} />

				<h5>Password</h5>
				<input
					type='password'
					name='password'
					className='text-input'
					value={this.state.password}
					onChange={this.handleChange} />

				<h5>Re-Enter Password</h5>
				<input
					type='password'
					name='password2'
					className='text-input'
					value={this.state.password2}
					onChange={this.handleChange} />

				<Button
					text='Submit'
					onClick={this.onSubmitClick} />
			</div>
		);
	}
}

export default RegisterPage;