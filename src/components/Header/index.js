import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton, Button, Box, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SmsIcon from '@material-ui/icons/Sms'
import NotificationIcon from '@material-ui/icons/Notifications'
import NotesIcon from '@material-ui/icons/Notes'
import CreateIcon from '@material-ui/icons/Create'
import Avatar from '../Avatar'
import Logo from '../../assets/logo.png'
import OneAnother from '../../assets/oneAnother.png'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    borderBottom: '1px solid #c4c4c4',
    paddingBottom: theme.spacing(1),
  },
}))

export default function MenuAppBar() {
  const classes = useStyles()

  return (
    <AppBar position="static" color="transparent" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Box display={{ xs: 'none', sm: 'flex' }} flexDirection="column" flexGrow={1}>
          <img src={Logo} alt="Logo" width={32} height={32} />

          <Typography variant="body1">Dashboard</Typography>
        </Box>

        <Box display="flex" flexGrow={1}>
          <img src={OneAnother} alt="Logo" width={68} height={64} />
        </Box>

        <Box flexGrow={{ xs: 1, sm: 0 }}>
          <Button variant="contained" color="primary" className={classes.button} startIcon={<CreateIcon />}>
            Post
          </Button>
        </Box>

        <Box display={{ xs: 'none', sm: 'flex' }}>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="primary"
          >
            <NotesIcon style={{ fontSize: 30 }} />
          </IconButton>

          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="primary"
          >
            <NotificationIcon style={{ fontSize: 30 }} />
          </IconButton>

          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="primary"
          >
            <SmsIcon style={{ fontSize: 30 }} />
          </IconButton>
        </Box>

        <Avatar />
      </Toolbar>
    </AppBar>
  )
}
