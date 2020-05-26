import { client, localStorageKey } from './api-client'

function handleUserResponse({ user: { token, ...user } }) {
  // TODO remove
  return user
}

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

function register({ username, password }) {
  return client('signup', { data: { username, password } }).then(handleUserResponse)
}

function getToken() {
  return window.localStorage.getItem(localStorageKey)
}

function isLoggedIn() {
  return Boolean(getToken())
}

export { login, register, getToken, getUser, isLoggedIn }
export { logout } from './api-client'
