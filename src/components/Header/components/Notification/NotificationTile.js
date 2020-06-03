import React from 'react'
import { Box, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from 'components/Avatar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: ({ read }) => (read ? 'white' : '#FDF6EB'),
    borderRadius: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))
const NotificationTile = ({ offer, taskName }) => {
  const { user, read } = offer
  const classes = useStyles({ read })
  const label = `${user.firstName} ${user.lastName} sent you an offer about “${taskName}”.`

  return (
    <Box display="flex" flexDirection="column">
      <Box className={classes.root}>
        <Avatar>{`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`} </Avatar>
        <Box mx={1}>
          <Typography variant="body1">{label}</Typography>
        </Box>
        <Typography variant="body1">10m</Typography>
      </Box>
      <Box my={0.5}>
        <Divider />
      </Box>
    </Box>
  )
}

export default NotificationTile
