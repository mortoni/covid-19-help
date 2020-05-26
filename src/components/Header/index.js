import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Button, Box } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create'
import Logo from '../../assets/logo.png'
import OneAnother from '../../assets/oneAnother.png'
import Dialog from '../Dialog'
import Notifications from './components/Notification'
import Messages from './components/Messages'
import UserMenu from './components/UserMenu'
import Notes from './components/Notes'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    borderBottom: '1px solid #c4c4c4',
  },
  button: {
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}))
export default function MenuAppBar() {
  const classes = useStyles()
  const [openPost, setPost] = useState(false)

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Box display={{ xs: 'none', md: 'flex' }} flexDirection="column" flexGrow={1}>
            <img src={Logo} alt="Logo" width={32} height={32} />

            <Typography variant="body1">Dashboard</Typography>
          </Box>

          <Box display={'flex'} flexGrow={1}>
            <img src={OneAnother} alt="Logo" width={68} height={64} />
          </Box>

          <Box flexGrow={{ xs: 1, sm: 0 }}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<CreateIcon />}
              onClick={() => !openPost && setPost(true)}
            >
              Post
            </Button>
          </Box>

          <Box display={{ xs: 'none', sm: 'flex' }}>
            <Notes />
            <Notifications />
            <Messages />
          </Box>

          <UserMenu />
        </Toolbar>
      </AppBar>

      <Dialog open={openPost} setOpen={setPost} />
    </>
  )
}
