import React from 'react'
import { Typography, Box } from '@material-ui/core'
import LocationIcon from '@material-ui/icons/LocationOnOutlined'

const Location = () => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Typography variant="h6">Alan Mortoni</Typography>
    <Box my={1}>
      <LocationIcon color="secondary" />
    </Box>
    <Typography variant="body2">Brisbane, 4000</Typography>
  </Box>
)

export default Location
