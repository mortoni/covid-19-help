import React from 'react'
import { UNATHENTICATED_ROUTES } from 'routes'
import { Router } from '@reach/router'
import HomeHeader from 'components/HomeHeader'

import LandingPage from 'pages/Landing'
import AboutPage from 'pages/About'
import HowPage from 'pages/How'
import StoriesPage from 'pages/Stories'
import FAQPage from 'pages/FAQ'
import SignupPage from 'pages/Signup'
import LoginPage from 'pages/Login'
// TODO create a default router
const UnauthenticatedApp = () => (
  <>
    <HomeHeader />
    <Router>
      <LandingPage path={UNATHENTICATED_ROUTES.LANDINGPAGE} />
      <AboutPage path={UNATHENTICATED_ROUTES.ABOUT} />
      <HowPage path={UNATHENTICATED_ROUTES.HOW} />
      <StoriesPage path={UNATHENTICATED_ROUTES.STORIES} />
      <FAQPage path={UNATHENTICATED_ROUTES.FAQ} />
      <SignupPage path={UNATHENTICATED_ROUTES.SIGNUP} />
      <LoginPage path={UNATHENTICATED_ROUTES.LOGIN} />
    </Router>
  </>
)

export default UnauthenticatedApp
