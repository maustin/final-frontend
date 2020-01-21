import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import CartPage from '../pages/CartPage';
import BrowsePage from '../pages/BrowsePage';

class Body extends React.Component {
	render() {
		return (
			<div className='body'>
				<Switch>
					<Route exact path='/' component={ HomePage } />
					<Route path='/cart' component={ CartPage } />
					<Route path='/browse' component={ BrowsePage } />
					<Route
						path='/login'
						render={props => <LoginPage {...props} setCurrentUser={this.props.setCurrentUser}/> }/>
					<Route path='/register' component={ RegisterPage } />
				</Switch>
			</div>
		);
	}
}

export default Body;