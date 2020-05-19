import firebase from 'firebase'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyDuS9Sty5uII8cAogOouxUfIa82j_lLJMo',
  authDomain: 'one-another-dev.firebaseapp.com',
  databaseURL: 'https://one-another-dev.firebaseio.com',
  projectId: 'one-another-dev',
  storageBucket: 'one-another-dev.appspot.com',
  messagingSenderId: '781994317481',
  appId: '1:781994317481:web:94a74386f82494d43abbb8',
  measurementId: 'G-D8BV47NYFE',
})

const db = firebaseConfig.firestore()

export { db }
