import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDuS9Sty5uII8cAogOouxUfIa82j_lLJMo',
  authDomain: 'one-another-dev.firebaseapp.com',
  databaseURL: 'https://one-another-dev.firebaseio.com',
}

firebase.initializeApp(config)

export const auth = firebase.auth
export const db = firebase.database()
