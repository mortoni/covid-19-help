import React from 'react'
import { useAuth } from 'context/auth-context'
import FullPageLoader from 'components/FullPageLoader'
import ErrorBoundary from 'components/ErrorBoundary'
const AuthenticatedApp = React.lazy(() => import(/* webpackPrefetch: true */ './AuthenticatedApp'))
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'))

const App = () => {
  const { user } = useAuth()

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<FullPageLoader />}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </React.Suspense>
    </ErrorBoundary>
  )
}

export default App
