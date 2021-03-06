import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Button, Box } from '@material-ui/core'
import { navigate } from '@reach/router'
import Logo from 'assets/logo.png'
import OneAnother from 'assets/oneAnother.png'
import Dialog from 'components/Dialog'
import Notifications from './components/Notification'
import UserMenu from './components/UserMenu'
import { ReactComponent as PenIcon } from 'assets/icons/pen-icon.svg'
import CreateTask from 'components/forms/CreateTask'
import { AUTHENTICATED_ROUTES } from 'routes'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    borderBottom: '1px solid #c4c4c4',
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  logo: {
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
  },
  oneAnother: {
    cursor: 'pointer',
  },
}))
export default function MenuAppBar() {
  const classes = useStyles()
  const [openPost, setPost] = React.useState(false)

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Box display={{ xs: 'none', md: 'flex' }} flexDirection="column" flexGrow={1}>
            <Box className={classes.logo} onClick={() => navigate(AUTHENTICATED_ROUTES.DASHBOARD)}>
              <img src={Logo} alt="Logo" width={32} height={32} />

              <Typography variant="body1">Dashboard</Typography>
            </Box>
          </Box>

          <Box
            display={'flex'}
            flexGrow={1}
            className={classes.oneAnother}
            onClick={() => navigate(AUTHENTICATED_ROUTES.DASHBOARD)}
          >
            <img src={OneAnother} alt="Logo" width={68} height={64} />
          </Box>

          <Box flexGrow={{ xs: 1, sm: 0 }}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<PenIcon />}
              onClick={() => !openPost && setPost(true)}
            >
              Post
            </Button>
          </Box>

          <Box display={{ xs: 'none', sm: 'flex' }}>
            <Notifications />
          </Box>

          <UserMenu />
        </Toolbar>
      </AppBar>

      <Dialog open={openPost} setOpen={setPost}>
        <CreateTask handleClose={() => setPost(false)} />
      </Dialog>
    </>
  )
}
