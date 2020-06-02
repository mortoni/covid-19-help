import React from 'react'
import { AuthProvider } from 'context/auth-context'
import { TasksProvider } from 'context/task-context'

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <TasksProvider>{children}</TasksProvider>
    </AuthProvider>
  )
}

export default AppProviders
