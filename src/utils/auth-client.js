import { client, localStorageKey } from './api-client'

function handleTokenResponse({ token }) {
  window.localStorage.setItem(localStorageKey, token)
}

function getUser() {
  const token = getToken()
  if (!token) {
    return Promise.resolve(null)
  }
  return client('user').then(({ userCredentials }) => userCredentials)
}

function login({ email, password }) {
  return client('login', { data: { email, password } })
    .then(handleTokenResponse)
    .then(() => client('user'))
    .then(({ userCredentials }) => userCredentials)
}

function register({ firstName, lastName, username, email, phoneNumber, address, password, confirmPassword }) {
  return client('signup', {
    data: { firstName, lastName, username, email, phoneNumber, address, password, confirmPassword },
  })
    .then(handleTokenResponse)
    .then(() => client('user'))
    .then(({ userCredentials }) => userCredentials)
}

function getToken() {
  return window.localStorage.getItem(localStorageKey)
}

function isLoggedIn() {
  return Boolean(getToken())
}

export { login, register, getToken, getUser, isLoggedIn }
export { logout } from './api-client'
