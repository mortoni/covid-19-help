import * as auth from './auth-client'
import * as task from './task-client'

async function bootstrapAppData() {
  let appData = { user: null }

  if (auth.isLoggedIn()) {
    const [user] = await Promise.all([auth.getUser()]) // TODO: fetch tasks ?
    appData = { user }
  }
  return appData
}

export { bootstrapAppData }
