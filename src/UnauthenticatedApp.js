import React from 'react'
import { UNATHENTICATED_ROUTES } from 'routes'
import { Router } from '@reach/router'
import HomeHeader from 'components/HomeHeader'
import { navigate } from '@reach/router'
import AboutPage from 'pages/About'
import HowPage from 'pages/How'
import StoriesPage from 'pages/Stories'
import FAQPage from 'pages/FAQ'
import SignupPage from 'pages/Signup'
import LoginPage from 'pages/Login'

const UnauthenticatedApp = () => {
  React.useEffect(() => {
    navigate(UNATHENTICATED_ROUTES.LOGIN)
  }, [])

  return (
    <>
      <HomeHeader />
      <Router>
        <AboutPage path={UNATHENTICATED_ROUTES.ABOUT} />
        <HowPage path={UNATHENTICATED_ROUTES.HOW} />
        <StoriesPage path={UNATHENTICATED_ROUTES.STORIES} />
        <FAQPage path={UNATHENTICATED_ROUTES.FAQ} />
        <SignupPage path={UNATHENTICATED_ROUTES.SIGNUP} />
        <LoginPage path={UNATHENTICATED_ROUTES.LOGIN} />
      </Router>
    </>
  )
}

export default UnauthenticatedApp
