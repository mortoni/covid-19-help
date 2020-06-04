import { client, localStorageKey } from 'utils/api-client'

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

function uploadImage({ image }) {
  return client('user/image', {
    data: { image },
    headers: { 'content-type': 'multipart/form-data' },
  }).then((response) => {
    debugger
  })
}

function getToken() {
  return window.localStorage.getItem(localStorageKey)
}

function isLoggedIn() {
  return Boolean(getToken())
}

export { login, register, getToken, getUser, isLoggedIn, uploadImage }
export { logout } from './api-client'
