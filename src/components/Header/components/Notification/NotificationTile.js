import React from 'react'
import { Box, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { differenceInMinutes } from 'date-fns'
import Avatar from 'components/Avatar'
import { AUTHENTICATED_ROUTES } from 'routes'
import { navigate } from '@reach/router'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: ({ read }) => (read ? 'white' : '#FDF6EB'),
    borderRadius: theme.spacing(2),
    paddingRight: theme.spacing(2),
    cursor: 'pointer',
  },
}))

function getTime({ createdAt }) {
  var diffInMinutes = differenceInMinutes(new Date(), new Date(createdAt))

  if (diffInMinutes <= 60) {
    return diffInMinutes <= 30 ? 'Now' : `${diffInMinutes}m`
  }

  const hours = Math.floor(diffInMinutes / 60)
  const days = Math.floor(diffInMinutes / 60 / 24)

  return hours <= 24 ? `${hours}h` : `${days}d`
}

const NotificationTile = ({ taskName, taskId, read, createdAt, firstName, lastName, imageUrl, onClose }) => {
  const classes = useStyles({ read })

  function handleOfferClick() {
    onClose()
    navigate(AUTHENTICATED_ROUTES.TASK, { state: { taskId } })
  }

  return (
    <Box display="flex" flexDirection="column">
      <Box className={classes.root} onClick={handleOfferClick}>
        <Avatar>{`${firstName.charAt(0)}${lastName.charAt(0)}`} </Avatar>
        <Box mx={1}>
          <Typography variant="body1">{`${firstName} ${lastName} sent you an offer about “${taskName}”.`}</Typography>
        </Box>
        <Box flexGrow={1}>
          <Typography variant="body1">{getTime({ createdAt })}</Typography>
        </Box>
      </Box>
      <Box my={0.5}>
        <Divider />
      </Box>
    </Box>
  )
}

export default NotificationTile
