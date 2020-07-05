import React from 'react'
import { Box, Typography, Grid, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SharedContext } from 'context/shared-context'
import format from 'date-fns/format'
import Avatar from 'components/Avatar'
import { addOffer } from 'utils/task-client'
import { useAuth } from 'context/auth-context'
import { useAsync } from 'utils/use-async'
import { ReactComponent as ConfirmIcon } from 'assets/confirmation.svg'

const useStyles = makeStyles((theme) => ({
  header: {
    borderBottom: '1px solid #c4c4c4',
  },
  button: {
    minWidth: 340,
  },
}))
const OfferToHelp = () => {
  // TODO divider each step in a component
  const { shared, dispatch } = React.useContext(SharedContext)
  const classes = useStyles()
  const [offer, setOffer] = React.useState(false)
  const [submited, setSubmitted] = React.useState(false)
  const { isLoading, run } = useAsync()
  const { user } = useAuth()
  const [message, setMessage] = React.useState('')
  const task = shared.selected

  function handleOffer(e) {
    e.preventDefault()
    run(addOffer({ taskId: task.id, taskOwner: task.username, message }))
    setSubmitted(true)
  }

  function handleMessageChange(e) {
    if (e.target.value.length <= 400) {
      setMessage(e.target.value)
    }
  }

  return (
    <>
      <Box my={2} display={!offer && !submited ? 'block' : 'none'}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className={classes.header}>
              <Typography variant="h5">{task.name}</Typography>
            </Box>
          </Grid>

          <Grid item container xs={12} alignItems="center">
            <Avatar imageScr={user.imageUrl}>{task.username}</Avatar>
            <Typography variant="body1">
              posted by {task.username} on {format(new Date(task.createdAt), 'dd/MM/yyyy')}
            </Typography>
          </Grid>

          <Grid item xs={12} container justify="center">
            <Typography variant="body2">{task.description}</Typography>
          </Grid>

          <Grid item xs={12} container justify="center">
            <Box mt={4}>
              <Button variant="contained" color="primary" className={classes.button} onClick={() => setOffer(true)}>
                Offer to help
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box my={2} display={offer && !submited ? 'block' : 'none'}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Add a message</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">Add a message to your offer to let them know how you can help.</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="message"
              value={message}
              multiline
              rows={4}
              variant="outlined"
              placeholder="Hi, I can help with... "
              onChange={handleMessageChange}
              fullWidth
              helperText={
                <Box display="flex" justifyContent="flex-end">
                  <Typography>{`${message.length}/ 400 characters`}</Typography>
                </Box>
              }
            />
          </Grid>
          <Grid item container xs={12} justify="center">
            <Button variant="contained" color="primary" className={classes.button} onClick={handleOffer}>
              Send my offer
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box my={2} display={submited ? 'block' : 'none'}>
        <ConfirmIcon />
        <Box my={2}>
          <Typography variant="h5">Your offer has been sent!</Typography>
        </Box>
        <Box mb={4}>
          <Typography variant="caption">We have let them know. Thanks for the kind offer!</Typography>
        </Box>

        <Box>
          <Button variant="contained" color="primary" className={classes.button}>
            Back to dashboard
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default OfferToHelp
