import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import firebaseConnfig from './utils/firebaseConfig';
import './styles/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp(firebaseConnfig);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
