import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  badge: {
    background: theme.palette.secondary.main,
    border: '2px solid #FFFFFF',
    borderRadius: 99,
    width: 25,
    height: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.25)',
    color: 'white',
    fontWeight: 'bold',
  },
}))
const NotificationBadge = ({ children }) => {
  const classes = useStyles()

  return <Box className={classes.badge}>{children}</Box>
}

export default NotificationBadge
