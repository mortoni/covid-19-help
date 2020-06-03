import React from 'react'
import { Box, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { differenceInMinutes, differenceInHours, differenceInCalendarDays } from 'date-fns'
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
  const { user, read, createdAt } = offer
  const classes = useStyles({ read })
  const label = `${user.firstName} ${user.lastName} sent you an offer about “${taskName}”.`

  function getTime() {
    var diffInMinutes = differenceInMinutes(new Date(), new Date(createdAt))

    if (diffInMinutes <= 60) {
      return diffInMinutes <= 30 ? 'Now' : `${diffInMinutes}m`
    }

    const hours = Math.floor(diffInMinutes / 60)
    const days = Math.floor(diffInMinutes / 60 / 24)

    return hours <= 24 ? `${hours}h` : `${days}d`
  }

  return (
    <Box display="flex" flexDirection="column">
      <Box className={classes.root}>
        <Avatar>{`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`} </Avatar>
        <Box mx={1}>
          <Typography variant="body1">{label}</Typography>
        </Box>
        <Box flexGrow={1}>
          <Typography variant="body1">{getTime()}</Typography>
        </Box>
      </Box>
      <Box my={0.5}>
        <Divider />
      </Box>
    </Box>
  )
}

export default NotificationTile
