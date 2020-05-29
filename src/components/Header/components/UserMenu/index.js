import React, { useState } from 'react'
import { IconButton, Drawer, Box, Button } from '@material-ui/core'
import Avatar from '../../../Avatar'
import { makeStyles } from '@material-ui/core/styles'
import UserIcon from '@material-ui/icons/PersonOutlineOutlined'
import SettingIcon from '@material-ui/icons/SettingsOutlined'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import { navigate } from '@reach/router'
import { AUTHENTICATED_ROUTES } from '../../../../routes'
import { useAuth } from '../../../../context/auth-context'

const useStyles = makeStyles((theme) => ({
  menuButton: {},
  profile: {
    display: 'flex',
    height: 80,
    borderBottom: '1px solid #c4c4c4',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
}))
const UserMenu = () => {
  const { user, logout } = useAuth()
  const classes = useStyles()
  const [open, toggleDrawer] = useState(false)

  const getInitials = () => `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`

  const handleLogout = (event) => {
    event.preventDefault()
    logout()
  }

  function goToProfile(event) {
    toggleDrawer(false)
    navigate(AUTHENTICATED_ROUTES.PROFILE)
  }

  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="primary"
        onClick={() => toggleDrawer(true)}
      >
        <Avatar>{getInitials()}</Avatar>
      </IconButton>

      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <Box width={300} p={2}>
          <Box className={classes.profile}>{/* TODO */}</Box>
          <Box my={2}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              startIcon={<UserIcon />}
              onClick={goToProfile}
              fullWidth
            >
              My Profile
            </Button>
          </Box>
          <Box my={2}>
            <Button color="primary" className={classes.button} startIcon={<SettingIcon />} fullWidth>
              Settings
            </Button>
          </Box>
          <Box my={2}>
            <Button
              color="secondary"
              className={classes.button}
              startIcon={<LogoutIcon />}
              fullWidth
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}

export default UserMenu
