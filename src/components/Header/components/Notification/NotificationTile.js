import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from 'components/Avatar'

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    borderTop: `1px solid ${theme.palette.grey[200]}`,
    display: 'flex',
    alignItems: 'center',
  },
}))
const NotificationTile = (test) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Avatar />
      <Box mx={1}>
        <Typography variant="body1">Sarah Bailey sent you an offer about “Dog walking”.</Typography>
      </Box>
      <Typography variant="body1">10m</Typography>
    </Box>
  )
}

export default NotificationTile
