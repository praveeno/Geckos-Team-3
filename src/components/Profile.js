import React from 'react';
import avatar from '../assets/images/avatar.jpg';
import '../styles/Profile.css';

function Profile(props) {
  return(
    <div className="profile">
      <div className="user-info">
        <img src={avatar} alt="Avatar :P"/>
        <h2>Hi, {props.user}!</h2>
      </div>
      <div className="user-posts">
        <div className="user-action">
          <button>Where have you been lately?</button>
        </div>
        <div className="user-feed">
          <p className="empty-notice">Your posts will show up here...</p>
        </div>
      </div>
    </div>
  )
}

export default Profile;