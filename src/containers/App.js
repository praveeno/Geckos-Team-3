import React, { Component } from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile/>
      </div>
    );
  }
}

export default App;
