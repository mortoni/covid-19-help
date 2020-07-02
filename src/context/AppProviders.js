import React from 'react'
import { AuthProvider } from 'context/auth-context'
import { TasksProvider } from 'context/task-context'
import { ProgressProvider } from 'context/progress-contex'

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <TasksProvider>
        <ProgressProvider>{children}</ProgressProvider>
      </TasksProvider>
    </AuthProvider>
  )
}

export default AppProviders
