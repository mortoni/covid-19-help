import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core'
import theme from './theme'
import AppProviders from './context/AppProviders'

ReactDOM.render(
  <ThemeProvider theme={createMuiTheme(theme)}>
    <CssBaseline />
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <AppProviders>
        <App />
      </AppProviders>
    </MuiPickersUtilsProvider>
  </ThemeProvider>,
  document.getElementById('root'),
)
