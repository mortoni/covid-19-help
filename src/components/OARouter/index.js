import React from 'react'
import { UNATHENTICATED_ROUTES } from '../../routes'
import { Router } from '@reach/router'

import Dashboard from '../Dashboard'
import LandingPage from '../../pages/Landing'
import AboutPage from '../../pages/About'
import HowPage from '../../pages/How'
import StoriesPage from '../../pages/Stories'
import FAQPage from '../../pages/FAQ'
import SignupPage from '../../pages/Signup'
import ProfilePage from '../../pages/Profile'
import LoginPage from '../../pages/Login'

const OARouter = () => {
  return (
    <Router>
      <LandingPage path={UNATHENTICATED_ROUTES.LANDINGPAGE} />
      <Dashboard path={UNATHENTICATED_ROUTES.DASHBOARD} />
      <AboutPage path={UNATHENTICATED_ROUTES.ABOUT} />
      <HowPage path={UNATHENTICATED_ROUTES.HOW} />
      <StoriesPage path={UNATHENTICATED_ROUTES.STORIES} />
      <FAQPage path={UNATHENTICATED_ROUTES.FAQ} />
      <SignupPage path={UNATHENTICATED_ROUTES.SIGNUP} />
      <ProfilePage path={UNATHENTICATED_ROUTES.PROFILE} />
      <LoginPage path={UNATHENTICATED_ROUTES.LOGIN} />
    </Router>
  )
}

export default OARouter
