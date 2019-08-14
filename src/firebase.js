import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyAC50bkbk8TnaaKoAGQRJNPJWilxYPZLV8',
  authDomain: 'reduxtest-20485.firebaseapp.com',
  databaseURL: 'https://reduxtest-20485.firebaseio.com',
  projectId: 'reduxtest-20485',
  storageBucket: 'reduxtest-20485.appspot.com',
  messagingSenderId: '197114660158',
  appId: '1:197114660158:web:84588df47375aec6'
});

export const db = firebase.firestore();
