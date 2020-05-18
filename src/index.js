import React from 'react'
import ReactDOM from 'react-dom'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { ThemeProvider, StylesProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'
import Dashboard from './components/Dashboard'
import * as serviceWorker from './serviceWorker'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider>
      <ThemeProvider theme={createMuiTheme(theme)}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Dashboard />
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
