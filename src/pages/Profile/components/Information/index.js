import React from 'react'
import { Typography, Box } from '@material-ui/core'

const Information = () => (
  <Box display="flex">
    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" mx={4}>
      <Typography variant="h6">Language Spoken</Typography>
      <Typography variant="body2">English, Italian</Typography>
    </Box>
    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" mx={4}>
      <Typography variant="h6">Task I can Help</Typography>
      <Typography variant="body2">Dog Walking, Shopping</Typography>
    </Box>
  </Box>
)

export default Information
