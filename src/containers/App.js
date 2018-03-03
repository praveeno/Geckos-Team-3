import React, { Component } from 'react';
import Header from '../components/Header';
import ProfileContainer from './ProfileContainer';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProfileContainer/>
      </div>
    );
  }
}

export default App;
