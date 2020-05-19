import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { ThemeProvider, StylesProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core'
import { Router } from '@reach/router'
// import { AuthProvider } from './hooks/useAuth'
import theme from './theme'
import { ROUTERS } from './routers' // TODO rename to ROUTES

import Dashboard from './components/Dashboard'
import LandingPage from './pages/LandingPage'

const App = () => (
  <ThemeProvider theme={createMuiTheme(theme)}>
    <CssBaseline />
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <AuthProvider> */}
      <Router>
        <LandingPage path={ROUTERS.LANDINGPAGE} />
        <Dashboard path={ROUTERS.DASHBOARD} />
      </Router>
      {/* </AuthProvider> */}
    </MuiPickersUtilsProvider>
  </ThemeProvider>
)

export default App
