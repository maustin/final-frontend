import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './containers/Header';
import Body from './containers/Body';
import ColorManager from './utils/ColorManager';

class App extends React.Component {
  state = {
    currentUser: localStorage.getItem('hgss-uid'),
    //cart: localStorage.getItem('hgss-cart'),
  }

  colorManager = new ColorManager();

  setCurrentUser = token => {
    // TODO: more token validation?
    if (!token)
      return;

    this.setState({ currentUser: token });
    localStorage.setItem('hgss-uid', token);
    console.log('user token:', token);
  }

  logout = () => {
    localStorage.removeItem('hgss-uid');
    this.setState({ currentUser: null });
    this.props.history.push('/');
  }

  // componentDidMount() {
  //   document.documentElement.style.setProperty('--base-color', 'red');
  // }
  componentDidMount() {
    //this.colorManager.setLight();
  }

  render() {
    console.log("I have uid:", this.state.currentUser);
    return (
      <div className='app'>
        <Header
          currentUser={this.state.currentUser}
          logout={this.logout} 
          setLight={this.colorManager.setLight}
          setDark={this.colorManager.setDark} />
        <Body
          currentUser={this.state.currentUser}
          setCurrentUser={this.setCurrentUser} />

      </div>
    )
  }
}

export default withRouter(App);