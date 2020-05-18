import React, { useState } from 'react'
import { Popover, Typography, IconButton, Grid, Box } from '@material-ui/core'
import NotificationIcon from '@material-ui/icons/Notifications'
import { makeStyles } from '@material-ui/core/styles'
import NotificationTile from './NotificationTile'

const useStyles = makeStyles((theme) => ({
  popover: {},
  paper: {},
}))
const Notifications = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const id = open ? 'notification-popover' : undefined

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
        <NotificationIcon style={{ fontSize: 30 }} />
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
        <Box maxWidth={340} p={2}>
          <Typography variant="h5">Notifications</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <NotificationTile />
            </Grid>

            <Grid item xs={12}>
              <NotificationTile />
            </Grid>

            <Grid item xs={12}>
              <NotificationTile />
            </Grid>
          </Grid>
        </Box>
      </Popover>
    </>
  )
}

export default Notifications
