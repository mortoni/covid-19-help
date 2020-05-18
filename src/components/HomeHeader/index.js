import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Button, Box } from '@material-ui/core'
import OneAnother from '../../assets/oneAnother.png'

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
export default function MenuAppBar() {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Box display="flex" flexGrow={1}>
            <img src={OneAnother} alt="Logo" width={68} height={64} />
          </Box>

          <Box display="flex" flexGrow={{ xs: 1, sm: 0 }}>
            <Button className={classes.button} onClick={() => {}}>
              About
            </Button>

            <Button className={classes.button} onClick={() => {}}>
              How does it work?
            </Button>

            <Button className={classes.button} onClick={() => {}}>
              Stories
            </Button>

            <Button className={classes.button} onClick={() => {}}>
              FAQ
            </Button>

            <Box mx={1}>
              <Button variant="outlined" color="primary" onClick={() => {}}>
                Sign Up
              </Button>
            </Box>

            <Button className={classes.button} onClick={() => {}}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
