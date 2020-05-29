import React from 'react'
import { AUTHENTICATED_ROUTES } from '../../routes'
import { Router } from '@reach/router'
import { navigate } from '@reach/router'
import Header from '../Header'
import { Box } from '@material-ui/core'

import Dashboard from '../../pages/Dashboard'
import ProfilePage from '../../pages/Profile'

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
        <ProfilePage path={AUTHENTICATED_ROUTES.PROFILE} />
      </Router>
    </Box>
  )
}

export default AuthenticatedApp
