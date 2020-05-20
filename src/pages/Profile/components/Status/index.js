import React from 'react'
import { Typography, Box, Paper } from '@material-ui/core'

const Status = () => {
  return (
    <Box
      component={Paper}
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      height={85}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h6" color="primary">
          12
        </Typography>
        <Typography variant="body2" color="textSecondary">
          People Helped
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h6" color="primary">
          12
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Needed Helped
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h6" color="primary">
          1
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Offered
        </Typography>
      </Box>
    </Box>
  )
}

export default Status
