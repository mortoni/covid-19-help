import React from 'react'
import { Box, Container } from '@material-ui/core'
import SignupForm from 'components/forms/Signup'

const SignupPage = () => (
  <Box mt={3}>
    <Container maxWidth="sm" component="main">
      <SignupForm />
    </Container>
  </Box>
)

export default SignupPage
