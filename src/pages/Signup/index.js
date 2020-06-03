import React from 'react'
import { Box, Container } from '@material-ui/core'
import Signup from 'components/forms/Signup'

const SignupPage = () => (
  <Box mt={3}>
    <Container maxWidth="sm" component="main">
      <Signup />
    </Container>
  </Box>
)

export default SignupPage
