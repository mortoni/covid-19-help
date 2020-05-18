import React from 'react'
import ReactDOM from 'react-dom'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { ThemeProvider, StylesProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core'
import { Router } from '@reach/router'
import * as serviceWorker from './serviceWorker'
import theme from './theme'
import { ROUTERS } from './routes'

import Dashboard from './components/Dashboard'
import LandingPage from './pages/LandingPage'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <StylesProvider>
      <ThemeProvider theme={createMuiTheme(theme)}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Router>
            <LandingPage path={ROUTERS.LANDINGPAGE} />
            <Dashboard path={ROUTERS.DASHBOARD} />
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
