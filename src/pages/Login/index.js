import React from 'react'
import { Box, Container, Button, Typography, Divider } from '@material-ui/core'
import LoginForm from 'components/forms/Login'
import { makeStyles } from '@material-ui/core/styles'
import Background from 'assets/backgrounds/bg-2.png'
import { ReactComponent as GoogleIcon } from 'assets/social/google.svg'
import { ReactComponent as FacebookIcon } from 'assets/social/facebook.svg'

const useStyles = makeStyles((theme) => ({
  image: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  button: {
    height: 56,
    border: `1.5px solid ${theme.palette.primary.main}`,
  },
}))
const Login = () => {
  const classes = useStyles()

  return (
    <Box display="flex" height="100%">
      <img src={Background} alt="Logo" className={classes.image} />

      <Box display="flex" flexGrow={1}>
        <Container maxWidth="sm" component="main">
          <Box mt={16} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5">Login to One Another</Typography>

            <Box mt={2} width={225} textAlign="center">
              <Typography variant="body2" color="textSecondary">
                Welcome back to One Another. Login with
              </Typography>
            </Box>

            <Box display="flex" justifyContent="center" mt={3}>
              <Box mr={2}>
                <Button variant="outlined" color="primary" fullWidth onClick={() => {}} startIcon={<GoogleIcon />}>
                  Google
                </Button>
              </Box>
              <Button variant="outlined" color="primary" fullWidth onClick={() => {}} startIcon={<FacebookIcon />}>
                Facebook
              </Button>
            </Box>

            <Box my={2} width="100%" display="flex" alignItems="center">
              <Box component={Divider} flexGrow={1} />
              <Box mx={1}>
                <Typography variant="body2" color="textSecondary">
                  or
                </Typography>
              </Box>
              <Box component={Divider} flexGrow={1} />
            </Box>

            <LoginForm />
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Login
