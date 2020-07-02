import React from 'react'
import { Box, Container, Typography, Divider, Button } from '@material-ui/core'
import SignupForm from 'components/forms/Signup'
import { makeStyles } from '@material-ui/core/styles'
import Background from 'assets/backgrounds/bg-1.png'
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
const SignupPage = () => {
  const classes = useStyles()

  return (
    <Box display="flex" height="100%">
      <img src={Background} alt="Logo" className={classes.image} />

      <Box display="flex" flexGrow={1}>
        <Container maxWidth="sm" component="main">
          <Box mt={{ xs: 2, sm: 4, md: 16 }} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5">Sign up to One Another</Typography>

            <Box mt={2}>
              <Typography variant="body2" color="textSecondary">
                Connect a social account to One Another
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

            <Typography variant="body2" color="textSecondary">
              Use an email to sign up to One Another.
            </Typography>

            <SignupForm />
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default SignupPage
