import React from 'react'
import { AuthProvider } from 'context/auth-context'
import { SharedProvider } from 'context/shared-context'
import { ProgressProvider } from 'context/progress-contex'

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <SharedProvider>
        <ProgressProvider>{children}</ProgressProvider>
      </SharedProvider>
    </AuthProvider>
  )
}

export default AppProviders
