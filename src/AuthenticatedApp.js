import React from 'react'
import { AUTHENTICATED_ROUTES } from 'routes'
import { Router } from '@reach/router'
import { Box } from '@material-ui/core'
import Header from 'components/Header'
import { navigate } from '@reach/router'

import Dashboard from 'pages/Dashboard'
import Profile from 'pages/Profile'
import Settings from 'pages/Settings'

// remove div that wraps pages/route
function RouterWrapper({ children }) {
  return <>{children}</>
}

const AuthenticatedApp = () => {
  React.useEffect(() => {
    navigate(AUTHENTICATED_ROUTES.DASHBOARD)
  }, [])

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Header />
      <Router primary={false} component={RouterWrapper}>
        <Dashboard path={AUTHENTICATED_ROUTES.DASHBOARD} />
        <Profile path={AUTHENTICATED_ROUTES.PROFILE} />
        <Settings path={AUTHENTICATED_ROUTES.SETTINGS} />
      </Router>
    </Box>
  )
}

export default AuthenticatedApp
