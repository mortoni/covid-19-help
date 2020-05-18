import React, { useState } from 'react'
import { Popover, Typography, IconButton, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SmsIcon from '@material-ui/icons/Sms'
import MessageTile from './MessageTile'

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
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color={open ? 'secondary' : 'primary'}
        onClick={handleClick}
      >
        <SmsIcon style={{ fontSize: 30 }} />
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
          <Typography variant="h5">My Messages</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MessageTile />
            </Grid>

            <Grid item xs={12}>
              <MessageTile />
            </Grid>
          </Grid>
        </Box>
      </Popover>
    </>
  )
}

export default Notifications
