import React from 'react'
import { AUTHENTICATED_ROUTES } from 'routes'
import { Router } from '@reach/router'
import { Box } from '@material-ui/core'
import Header from 'components/Header'

import Dashboard from 'pages/Dashboard'
import ProfilePage from 'pages/Profile'

// remove div that wraps pages/route
function RouterWrapper({ children }) {
  return <>{children}</>
}

const AuthenticatedApp = () => (
  <Box display="flex" flexDirection="column" height="100%">
    <Header />
    <Router primary={false} component={RouterWrapper}>
      <Dashboard path={AUTHENTICATED_ROUTES.DASHBOARD} />
      <ProfilePage path={AUTHENTICATED_ROUTES.PROFILE} />
    </Router>
  </Box>
)

export default AuthenticatedApp
