import React, { useState } from 'react'
import { Box, TextField, Button, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { navigate } from '@reach/router'
import { AUTHENTICATED_ROUTES } from '../../routes'
import Loader from 'react-spinners/ClimbingBoxLoader'
import Background from '../../assets/signupb.png'

const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    justifyContent: 'center',
  },
}))
const SignupPage = () => {
  const classes = useStyles()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)

    axios
      .post('/signup', {
        firstName,
        lastName,
        phoneNumber,
        country,
        username,
        email,
        password,
        confirmPassword,
      })
      .then((response) => {
        localStorage.setItem('AuthToken', `${response.data.token}`)
        setLoading(false)
        navigate(AUTHENTICATED_ROUTES.DASHBOARD)
      })
      .catch((error) => {
        setErrors(true)
      })
  }

  return (
    <>
      <Box>
        <img src={Background} alt="Logo" />
      </Box>

      <Box mt={3}>
        <Container maxWidth="sm" component="main">
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box display="flex" height={100} justifyContent="center">
                  <Loader size={15} color={'#6C63FF'} loading={loading} />
                </Box>
              </Grid>
              <Grid item xs={12}>
                {errors && <Typography> Something went wrong!</Typography>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={loading}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={loading}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="username"
                  label="Username"
                  variant="outlined"
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loading}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="phone"
                  label="Phone"
                  variant="outlined"
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={loading}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="country"
                  label="Country"
                  variant="outlined"
                  onChange={(e) => setCountry(e.target.value)}
                  disabled={loading}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="confirmPassword"
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={loading}
                  fullWidth
                />
              </Grid>

              <Grid container item xs={12} justify="center">
                <Box minWidth={140}>
                  <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </>
  )
}

export default SignupPage
