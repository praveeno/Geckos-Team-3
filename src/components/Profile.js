import React from 'react';
import avatar from '../assets/images/avatar.jpg';

function Profile(props) {
  return(
    <div className="profile">
      <div className="user-info">
        <img src={avatar} alt="Avatar :P"/>
        <h2>Hi, User!</h2>
      </div>
      <div className="user-action">
        <button>Where have you been lately?</button>
      </div>
    </div>
  )
}

export default Profile;