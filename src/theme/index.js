const palette = {
  primary: {
    light: '#a491ff',
    main: '#6C63FF',
    dark: '#2838cb',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff98b3',
    main: '#FF6584',
    dark: '#c72f58',
  },
  grey: {
    100: '#F5F5F5',
    200: '#E7E7E7',
    300: '#DCDCDC',
    400: '#CECECE',
    500: '#BFBFBF',
    600: '#ACACAC',
    700: '#8A8A8A',
    800: '#616161',
    900: '#424242',
  },
  text: {
    primary: '#0D0D0D',
    secondary: '#9E9E9E',
  },
}

export default {
  palette,
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
    MuiButton: {
      root: {
        borderRadius: 16,
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderRadius: 16,
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: palette.secondary.main,
        height: 4,
        borderRadius: 4,
      },
    },
  },
}
