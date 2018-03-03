import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDEjCljm41qWWFF0GJKJIiCNTt4t1In31o",
    authDomain: "travellot-3220d.firebaseapp.com",
    databaseURL: "https://travellot-3220d.firebaseio.com",
    projectId: "travellot-3220d",
    storageBucket: "travellot-3220d.appspot.com",
    messagingSenderId: "1007910538935"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
