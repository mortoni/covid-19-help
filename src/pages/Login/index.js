import React from 'react'
import { Box, Container } from '@material-ui/core'
import LoginForm from 'components/forms/Login'

const Login = () => {
  return (
    <Box mt={3}>
      <Container maxWidth="xs" component="main">
        <LoginForm />
      </Container>
    </Box>
  )
}

export default Login
