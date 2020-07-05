import React from 'react'
import { AuthProvider } from 'context/auth-context'
import { SharedProvider } from 'context/shared-context'

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <SharedProvider>{children}</SharedProvider>
    </AuthProvider>
  )
}

export default AppProviders
