import React, { useState } from 'react'
import { Box, TextField, Button, Container, Grid, Typography } from '@material-ui/core'
import Loader from 'react-spinners/ClimbingBoxLoader'
import { useAuth } from '../../context/auth-context'
import { useAsync } from '../../utils/use-async'
import AddressField from '../../components/AddressField'

const SignupPage = () => {
  const { isLoading, isError, error, run } = useAsync()
  const { register } = useAuth()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    run(register({ firstName, lastName, username, email, phoneNumber, address, password, confirmPassword }))
  }

  return (
    <Box mt={3}>
      <Container maxWidth="sm" component="main">
        <form noValidate autocomplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box display="flex" height={100} justifyContent="center">
                <Loader size={15} color={'#6C63FF'} loading={isLoading} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              {isError && <Typography> {error}</Typography>}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                onChange={(e) => setFirstName(e.target.value)}
                disabled={isLoading}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                onChange={(e) => setLastName(e.target.value)}
                disabled={isLoading}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="phone"
                label="Phone"
                variant="outlined"
                onChange={(e) => setPhone(e.target.value)}
                disabled={isLoading}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <AddressField handleChange={setAddress} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
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
                disabled={isLoading}
                fullWidth
              />
            </Grid>

            <Grid container item xs={12} justify="center">
              <Box minWidth={140}>
                <Button variant="contained" color="primary" disabled={isLoading} onClick={handleSubmit} fullWidth>
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  )
}

export default SignupPage
