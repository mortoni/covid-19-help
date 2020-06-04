import React from 'react'
import { Paper, Box, Grid, Typography, Button, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from 'components/Avatar'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Dialog from 'components/Dialog'
import Profile from './components/Profile'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}))
const OfferTile = ({ createdAt, message, read, status, user, taskId }) => {
  const classes = useStyles()
  const [openProfile, setOpen] = React.useState(false)

  return (
    <Box my={2}>
      <Paper className={classes.paper}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex">
                <Avatar>{`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`} </Avatar>
                <Box display="flex" flexDirection="column">
                  <Typography variant="h6">{user.firstName}</Typography>
                  <Typography variant="body1">{user.lastName}</Typography>
                </Box>
              </Box>

              <Button color="primary" onClick={() => setOpen(true)}>
                View profile <ChevronRightIcon />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">{message}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Dialog open={openProfile} setOpen={setOpen}>
        <Profile user={user} taskId={taskId} onClose={setOpen} />
      </Dialog>
    </Box>
  )
}

export default OfferTile
