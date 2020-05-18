import React from 'react'
import { Box, Typography } from '@material-ui/core'
import Avatar from '../../../Avatar'

const NotificationTile = () => {
  return (
    <Box display="flex" alignItems="center">
      <Avatar />
      <Box mx={1}>
        <Typography variant="body1">Sarah Bailey sent you a message about “Dog walking”.</Typography>
      </Box>
      <Typography variant="body1">10m</Typography>
    </Box>
  )
}

export default NotificationTile
