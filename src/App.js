import React from 'react'
import { useAuth } from './context/auth-context'
import AuthenticatedApp from './components/OARouter/AuthenticatedApp'
import UnauthenticatedApp from './components/OARouter/UnauthenticatedApp'

const App = () => {
  const { user } = useAuth()

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export default App
