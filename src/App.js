import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core'
import { Router } from '@reach/router'
import theme from './theme'
import { ROUTES } from './routes'

import Dashboard from './components/Dashboard'
import LandingPage from './pages/Landing'
import AboutPage from './pages/About'
import HowPage from './pages/How'
import StoriesPage from './pages/Stories'
import FAQPage from './pages/FAQ'
import SignupPage from './pages/Signup'
import ProfilePage from './pages/Profile'
import LoginPage from './pages/Login'

const App = () => (
  <ThemeProvider theme={createMuiTheme(theme)}>
    <CssBaseline />
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Router>
        <LandingPage path={ROUTES.LANDINGPAGE} />
        <Dashboard path={ROUTES.DASHBOARD} />
        <AboutPage path={ROUTES.ABOUT} />
        <HowPage path={ROUTES.HOW} />
        <StoriesPage path={ROUTES.STORIES} />
        <FAQPage path={ROUTES.FAQ} />
        <SignupPage path={ROUTES.SIGNUP} />
        <ProfilePage path={ROUTES.PROFILE} />
        <LoginPage path={ROUTES.LOGIN} />
      </Router>
    </MuiPickersUtilsProvider>
  </ThemeProvider>
)

export default App
