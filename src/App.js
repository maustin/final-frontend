import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './containers/Header';

class App extends React.Component {
  state = {
    currentUser: localStorage.getItem('uid')
  }

  setCurrentUser = token => {
    this.setState({ currentUser: token });
    localStorage.setItem('uid', token);
    console.log('user token:', token);
  }

  logout = () => {
    localStorage.removeItem('uid');
    this.setState({ currentUser: null });
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='app'>
        <Header
          currentUser={this.state.currentUser}
          logout={this.logout} />
        <main>
          blah blah blah
        </main>
      </div>
    )
  }
}

export default withRouter(App);