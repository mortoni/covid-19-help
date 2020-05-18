import React from 'react'
import { Box, Typography } from '@material-ui/core'
import Avatar from '../../../Avatar'

const MessageTile = () => {
  return (
    <Box display="flex" alignItems="center">
      <Avatar />
      <Box mx={1} display="flex" flexDirection="column" flexGrow={1}>
        <Typography variant="body1">Task name (unread)</Typography>
        <Typography variant="caption" color="textSecondary">
          Nina.m
        </Typography>
      </Box>
      <Typography variant="body1">10m</Typography>
    </Box>
  )
}

export default MessageTile
