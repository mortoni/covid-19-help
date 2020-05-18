import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({})

export default {
  palette: {
    primary: {
      light: '#a491ff',
      main: '#6C63FF',
      dark: '#2838cb',
    },
    secondary: {
      light: '#ff98b3',
      main: '#FF6584',
      dark: '#c72f58',
    },
    grey: {
      100: '#FAFAFA',
      200: '#F5F5F5',
      900: '#424248',
    },
  },
  shape: {
    borderRadius: 2,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 24,
      },
    },
  },
}
