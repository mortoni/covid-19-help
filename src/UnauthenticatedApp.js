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
import LandingPage from 'pages/Landing'
import ProgressBar from 'components/ProgressBar'

function RouterWrapper({ children }) {
  return <>{children}</>
}

const UnauthenticatedApp = () => {
  React.useEffect(() => {
    navigate(UNATHENTICATED_ROUTES.LANDING)
  }, [])

  return (
    <>
      <ProgressBar />
      {/* <HomeHeader /> TODO: decide what to do with this header */}
      <Router component={RouterWrapper}>
        {/* <AboutPage path={UNATHENTICATED_ROUTES.ABOUT} />
        <HowPage path={UNATHENTICATED_ROUTES.HOW} />
        <StoriesPage path={UNATHENTICATED_ROUTES.STORIES} />
        <FAQPage path={UNATHENTICATED_ROUTES.FAQ} />
        */}
        <LoginPage path={UNATHENTICATED_ROUTES.LOGIN} />
        <SignupPage path={UNATHENTICATED_ROUTES.SIGNUP} />
        <LandingPage path={UNATHENTICATED_ROUTES.LANDING} />
      </Router>
    </>
  )
}

export default UnauthenticatedApp
