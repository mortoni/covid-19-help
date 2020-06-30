// module.exports = {
//   apiKey: 'AIzaSyDuS9Sty5uII8cAogOouxUfIa82j_lLJMo',
//   authDomain: 'one-another-dev.firebaseapp.com',
//   databaseURL: 'https://one-another-dev.firebaseio.com',
//   projectId: 'one-another-dev',
//   storageBucket: 'one-another-dev.appspot.com',
//   messagingSenderId: '781994317481',
//   appId: '1:781994317481:web:94a74386f82494d43abbb8',
//   measurementId: 'G-D8BV47NYFE',
// }
module.exports = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}
