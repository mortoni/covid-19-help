import React, { useState } from 'react'
import { IconButton, Drawer, Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import UserIcon from '@material-ui/icons/PersonOutlineOutlined'
import SettingIcon from '@material-ui/icons/SettingsOutlined'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import { navigate } from '@reach/router'
import Avatar from 'components/Avatar'
import { AUTHENTICATED_ROUTES } from 'routes'
import { useAuth } from 'context/auth-context'

const useStyles = makeStyles((theme) => ({
  menuButton: {},
  profile: {
    display: 'flex',
    height: `calc(80px - ${theme.spacing(2)}px)`,
    borderBottom: '1px solid #c4c4c4',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
    paddingRight: theme.spacing(2),
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

  function goToProfile() {
    toggleDrawer(false)
    navigate(AUTHENTICATED_ROUTES.PROFILE)
  }

  function goToSettings() {
    toggleDrawer(false)
    navigate(AUTHENTICATED_ROUTES.SETTINGS)
  }

  function goToHelpAndSupport() {
    toggleDrawer(false)
    navigate(AUTHENTICATED_ROUTES.HELP_SUPPORT)
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
        <Avatar imageScr={user.imageUrl}>{getInitials()}</Avatar>
      </IconButton>

      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <Box width={300} p={2}>
          <Box className={classes.profile}>
            <Typography variant="h6">{`${user.firstName} ${user.lastName}`}</Typography>
            <Avatar imageScr={user.imageUrl}>{getInitials()}</Avatar>
          </Box>
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
            <Button
              color="primary"
              className={classes.button}
              startIcon={<SettingIcon />}
              onClick={goToSettings}
              fullWidth
            >
              Settings
            </Button>
          </Box>
          <Box my={2}>
            <Button
              color="primary"
              className={classes.button}
              startIcon={<HelpOutlineIcon />}
              onClick={goToHelpAndSupport}
              fullWidth
            >
              Help and support
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
