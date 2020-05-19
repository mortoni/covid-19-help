import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core'
import { Router } from '@reach/router'
// import { AuthProvider } from './hooks/useAuth'
import theme from './theme'
import { ROUTES } from './routes'

import Dashboard from './components/Dashboard'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import HowPage from './pages/HowPage'
import StoriesPage from './pages/StoriesPage'
import FAQPage from './pages/FAQPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'

const App = () => (
  <ThemeProvider theme={createMuiTheme(theme)}>
    <CssBaseline />
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <AuthProvider> */}
      <Router>
        <LandingPage path={ROUTES.LANDINGPAGE} />
        <Dashboard path={ROUTES.DASHBOARD} />
        <AboutPage path={ROUTES.ABOUT} />
        <HowPage path={ROUTES.HOW} />
        <StoriesPage path={ROUTES.STORIES} />
        <FAQPage path={ROUTES.FAQ} />
        <SignupPage path={ROUTES.SIGNUP} />
        <ProfilePage path={ROUTES.PROFILE} />
      </Router>
      {/* </AuthProvider> */}
    </MuiPickersUtilsProvider>
  </ThemeProvider>
)

export default App
