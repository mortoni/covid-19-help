import React from 'react'
import { Popover, Typography, IconButton, Grid, Box } from '@material-ui/core'
import NotificationTile from './NotificationTile'
import { ReactComponent as NotificationIcon } from 'assets/icons/notification-icon.svg'
import useNotification from 'utils/use-notification'
import Badge from 'components/Badge'
import NotificationBadge from 'components/NotificationBadge'

const Notifications = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const id = open ? 'notification-popover' : undefined
  const [notifications] = useNotification()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        aria-label="notifications"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color={open ? 'secondary' : 'primary'}
        onClick={handleClick}
      >
        <Badge count={notifications.length}>
          <NotificationIcon style={{ fontSize: 30, marginTop: 4 }} />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box width={440} p={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">Notifications</Typography>
            <NotificationBadge>{notifications.length}</NotificationBadge>
          </Box>
          <Grid container spacing={2}>
            {notifications.map((notification) => (
              <Grid key={notification.id} item xs={12}>
                <NotificationTile {...notification} onClose={handleClose} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Popover>
    </>
  )
}

export default Notifications
