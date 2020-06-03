import React, { useState } from 'react'
import { Popover, Typography, IconButton, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NotificationTile from './NotificationTile'
import { ReactComponent as NotificationIcon } from 'assets/icons/notification-icon.svg'
import useUserActivities from 'utils/use-user-activities'
import Badge from 'components/Badge'

const useStyles = makeStyles((theme) => ({
  popover: {},
  paper: {},
  notification: {
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
const Notifications = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const id = open ? 'notification-popover' : undefined
  const { userTasks } = useUserActivities()
  let notifications = []

  if (userTasks) {
    userTasks.forEach((task) => {
      if (task.offers) {
        task.offers.map((offer) => {
          notifications.push({ offer, taskId: task.id, taskName: task.name })
        })
      }
    })
  }

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
        classes={{ root: classes.popover }}
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
        <Box width={360} p={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">Notifications</Typography>
            <Box className={classes.notification}>{notifications.length}</Box>
          </Box>
          <Grid container spacing={2}>
            {notifications.map((notification) => {
              return (
                <Grid key={notification.taskId} item xs={12}>
                  <NotificationTile {...notification} />
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Popover>
    </>
  )
}

export default Notifications
