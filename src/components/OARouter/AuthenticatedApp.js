import React from 'react'
import { AUTHENTICATED_ROUTES } from '../../routes'
import { Router } from '@reach/router'
import { navigate } from '@reach/router'

import Dashboard from '../Dashboard'
import ProfilePage from '../../pages/Profile'

const AuthenticatedApp = () => {
  React.useEffect(() => {
    navigate(AUTHENTICATED_ROUTES.DASHBOARD)
  }, [])

  return (
    <Router>
      <Dashboard path={AUTHENTICATED_ROUTES.DASHBOARD} />
      <ProfilePage path={AUTHENTICATED_ROUTES.PROFILE} />
    </Router>
  )
}

export default AuthenticatedApp
