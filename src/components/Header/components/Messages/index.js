import React, { useState } from 'react'
import { Popover, Typography, IconButton, Grid, Box, SvgIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MessageTile from './MessageTile'
import { ReactComponent as MessageIcon } from 'assets/icons/message-icon.svg'

const useStyles = makeStyles((theme) => ({
  popover: {},
  paper: {},
  button: {
    color: 'transparent',
  },
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
        className={classes.button}
        onClick={handleClick}
      >
        <SvgIcon component={MessageIcon} style={{ fontSize: 30, marginTop: 4 }} />
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
