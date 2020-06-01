import React from 'react'
import { AuthProvider } from './auth-context'
import { TasksProvider } from './task-context'

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <TasksProvider>{children}</TasksProvider>
    </AuthProvider>
  )
}

export default AppProviders
