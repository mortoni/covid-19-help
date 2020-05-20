import React, { useState } from 'react'
import { Box, TextField, Button, Container, Grid, Typography } from '@material-ui/core'
import HomeHeader from '../../components/HomeHeader'
import axios from 'axios'
import { navigate } from '@reach/router'
import { ROUTES } from '../../routes'
import Loader from 'react-spinners/ClimbingBoxLoader'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    axios
      .post('/login', { email, password })
      .then((response) => {
        localStorage.setItem('AuthToken', `Bearer ${response.data.token}`)
        setLoading(false)
        navigate(ROUTES.DASHBOARD)
      })
      .catch((error) => {
        setErrors(true)
        setLoading(false)
      })
  }
  return (
    <>
      <HomeHeader />
      <Box mt={3}>
        <Container maxWidth="xs" component="main">
          <form noValidate>
            <Grid container spacing={2} h>
              <Grid item xs={12}>
                <Box display="flex" height={100} justifyContent="center">
                  <Loader size={15} color={'#6C63FF'} loading={loading} />
                </Box>
              </Grid>
              <Grid item xs={12}>
                {errors && <Typography> Something went wrong!</Typography>}
                {/* TODO: improve errors and validations, use formik */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid container item xs={12} justify="center">
                <Box minWidth={140}>
                  <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
                    Login
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

export default Login
