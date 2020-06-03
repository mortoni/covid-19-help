import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Badge } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  badge: {
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.25)',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    border: '2px solid #FFFFFF',
    borderRadius: '100%',
    height: 22,
    width: 22,
    fontWeight: 600,
  },
}))
const OABadge = ({ count, children }) => {
  const classes = useStyles()
  return (
    <Badge badgeContent={count} classes={{ badge: classes.badge }}>
      {children}
    </Badge>
  )
}

export default OABadge
