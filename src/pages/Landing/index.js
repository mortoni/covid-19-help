import React from 'react'
import { Typography, Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import background from 'assets/backgrounds/landing-bg.png'
import OneAnother from 'assets/oneAnother.png'
import { navigate } from '@reach/router'
import { UNATHENTICATED_ROUTES } from 'routes'

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: `url("${background}")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    height: 56,
    border: `1.5px solid ${theme.palette.primary.main}`,
  },
}))
const FAQPage = () => {
  const classes = useStyles()

  return (
    <Box display="flex" flexDirection="column" height="100%" justifyContent="center">
      <Box flexGrow={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography variant="h5">Welcome to One Another</Typography>
        <Box mt={6}>
          <img src={OneAnother} alt="Logo" width={225} height={145} />
        </Box>
      </Box>
      <Box flexGrow={1} className={classes.image}>
        <Box width={350} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            We're bringing together as many Australians as possible to create a community empowered by social kindness.
          </Typography>
        </Box>

        <Box width={310} display="flex" flexDirection="column" flexGrow={1} justifyContent="center">
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            fullWidth
            onClick={() => navigate(UNATHENTICATED_ROUTES.SIGNUP)}
          >
            Sign up
          </Button>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              fullWidth
              onClick={() => navigate(UNATHENTICATED_ROUTES.LOGIN)}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default FAQPage
