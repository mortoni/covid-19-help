import firebase from 'firebase'

const config = {
  projectId: 'one-another-dev',
  appId: '1:781994317481:web:94a74386f82494d43abbb8',
  databaseURL: 'https://one-another-dev.firebaseio.com',
  storageBucket: 'one-another-dev.appspot.com',
  locationId: 'australia-southeast1',
  apiKey: 'AIzaSyDuS9Sty5uII8cAogOouxUfIa82j_lLJMo',
  authDomain: 'one-another-dev.firebaseapp.com',
  messagingSenderId: '781994317481',
  measurementId: 'G-D8BV47NYFE',
}

firebase.initializeApp(config)

export const auth = firebase.auth
export const db = firebase.firestore()
