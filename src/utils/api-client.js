// import { queryCache } from 'react-query'
import axios from 'axios'

const localStorageKey = '__oneanother_token__'

async function client(endpoint, { data, headers: customHeaders, ...customConfig } = {}) {
  const token = window.localStorage.getItem(localStorageKey)

  const config = {
    method: data ? 'POST' : 'GET',
    url: `https://us-central1-one-another-dev.cloudfunctions.net/api/${endpoint}`,
    data: data ? data : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      ...customHeaders,
    },
    ...customConfig,
  }

  return axios(config).then(async (response) => {
    if (response.status === 401 || response.status === 403) {
      logout()
      // refresh the page for them
      // TODO go to login
      window.location.assign(window.location)
      return Promise.reject({ message: 'Please re-authenticate.' })
    }

    if (response.status === 200 || response.status === 201) {
      return response.data
    } else {
      return Promise.reject(data)
    }
  })
}

function logout() {
  //   queryCache.clear()
  window.localStorage.removeItem(localStorageKey)
}

export { client, localStorageKey, logout }
