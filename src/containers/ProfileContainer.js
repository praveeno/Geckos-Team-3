import React, { Component } from 'react';
import Profile from '../components/Profile';
import * as firebase from 'firebase';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "User"
    }
  }

  componentDidMount() {
    const userFromDB = firebase.database().ref().child('test');
    
    userFromDB.on('value', snap => {
      this.setState({
        user: snap.val()
      })
    })
  }

  render() {
    return(
      <Profile user={this.state.user}/>
    )
  }
}

export default ProfileContainer;