import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Button, Box, IconButton } from '@material-ui/core'
import { navigate } from '@reach/router'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import OneAnother from 'assets/oneAnother.png'
import { UNATHENTICATED_ROUTES } from 'routes'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    borderBottom: '1px solid #c4c4c4',
  },
  toolbar: {
    height: 80,
  },
  button: {
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}))
// TODO: rename this component
export default function HomeHeader() {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Box display="flex" flexGrow={1}>
            <img src={OneAnother} alt="Logo" width={68} height={64} />
          </Box>

          <Box display="flex" flexGrow={{ xs: 1, sm: 0 }} justifyContent={{ xs: 'flex-end' }} alignItems="center">
            <Box display={{ xs: 'none', md: 'block' }}>
              <Button className={classes.button} onClick={() => navigate(UNATHENTICATED_ROUTES.ABOUT)}>
                About
              </Button>

              <Button className={classes.button} onClick={() => navigate(UNATHENTICATED_ROUTES.HOW)}>
                How does it work?
              </Button>

              <Button className={classes.button} onClick={() => navigate(UNATHENTICATED_ROUTES.STORIES)}>
                Stories
              </Button>

              <Button className={classes.button} onClick={() => navigate(UNATHENTICATED_ROUTES.FAQ)}>
                FAQ
              </Button>
            </Box>
            <Box mx={0.5}>
              <Button variant="outlined" color="primary" onClick={() => navigate(UNATHENTICATED_ROUTES.SIGNUP)}>
                Sign Up
              </Button>
            </Box>
            <Box mx={0.5}>
              <Button className={classes.button} onClick={() => navigate(UNATHENTICATED_ROUTES.LOGIN)}>
                Login
              </Button>
            </Box>
            <Box mx={0.5} display={{ xs: 'block', md: 'none' }}>
              <IconButton color="secondary" onClick={() => {}}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
