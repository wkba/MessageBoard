import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBA0W8IoB9s_WgZ9gy5tjLGmohOOJeljYg",
    authDomain: "location-2c54d.firebaseapp.com",
    databaseURL: "https://location-2c54d.firebaseio.com",
    projectId: "location-2c54d",
    storageBucket: "location-2c54d.appspot.com",
    messagingSenderId: "88473548082"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('posts/');
export const auth = firebase.auth();