import React from 'react'
import { AUTHENTICATED_ROUTES } from 'routes'
import { Router } from '@reach/router'
import { Box } from '@material-ui/core'
import Header from 'components/Header'
import { navigate } from '@reach/router'
import Dashboard from 'pages/Dashboard'
import Profile from 'pages/Profile'
import Settings from 'pages/Settings'
import HelpAndSupport from 'pages/HelpAndSupport'
import Task from 'pages/Task'
import ProgressBar from 'components/ProgressBar'

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
      <Box position="relative">
        <ProgressBar />
      </Box>

      <Router primary={false} component={RouterWrapper}>
        <Dashboard path={AUTHENTICATED_ROUTES.DASHBOARD} />
        <Profile path={AUTHENTICATED_ROUTES.PROFILE} />
        <Settings path={AUTHENTICATED_ROUTES.SETTINGS} />
        <HelpAndSupport path={AUTHENTICATED_ROUTES.HELP_SUPPORT} />
        <Task path={AUTHENTICATED_ROUTES.TASK} />
      </Router>
    </Box>
  )
}

export default AuthenticatedApp
