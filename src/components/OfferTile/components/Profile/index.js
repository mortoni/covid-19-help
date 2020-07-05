import React from 'react'
import { Grid, Box, Typography, Button } from '@material-ui/core'
import Avatar from 'components/Avatar'
import LocationIcon from '@material-ui/icons/LocationOnOutlined'
import Status from '../Status'
import { useAsync } from 'utils/use-async'
import { assignTask } from 'utils/task-client'
import { ReactComponent as ConfirmIcon } from 'assets/confirmation.svg'

// TODO: Clean this mess
const Profile = ({ user, taskId, onClose }) => {
  const { isLoading, run } = useAsync()
  const [hasSubmitted, setSubmitted] = React.useState(false)

  function handleAcceptOffer() {
    if (hasSubmitted) {
      onClose(false)
    } else {
      run(assignTask({ taskId, assignedUser: user }))
      setSubmitted(true)
    }
  }

  return (
    <Grid container spacing={2}>
      {!hasSubmitted && (
        <>
          <Grid item xs={12}>
            <Box my={3} display="flex" alignItems="center" flexDirection="column">
              <Box position="relative" pr={3} pt={2}>
                <Avatar size={12} imageScr={user.imageUrl}>{`${user.firstName.charAt(0)} ${user.lastName.charAt(
                  0,
                )}`}</Avatar>
              </Box>
              <Box my={2}>
                <Typography variant="h4">{`${user.firstName} ${user.lastName}`}</Typography>
              </Box>
              <Box display="flex" textAlign="center">
                <Box mr={2}>
                  <LocationIcon color="secondary" />
                </Box>
                <Typography variant="body1">{user.address.location}</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Status />
          </Grid>

          <Grid item xs={12}>
            <Box my={2} px={{ xs: 0, md: 5 }}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6">About</Typography>
              </Box>
              I’m 32 years old, healthy. I have a car and am more than happy to help when it comes to running errands.
              However, I have 4 kids and a dog am quite busy on a general basis. I would be happy if anyone could help
              me walk my dogs whenever possible.
            </Box>
          </Grid>
        </>
      )}

      {hasSubmitted && (
        <>
          <Grid item xs={12} container justify="center">
            <ConfirmIcon />
          </Grid>
          <Grid item xs={12} container justify="center">
            <Box my={3}>
              <Typography variant="caption">
                Great, we’ll let Sarah know! Thanks for being a part of One Another.
              </Typography>
            </Box>
          </Grid>
        </>
      )}

      <Grid item xs={12} container justify="center">
        <Box mb={3}>
          <Button variant="contained" color="primary" onClick={handleAcceptOffer}>
            {hasSubmitted ? 'Back to task' : 'Accept this offer'}
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Profile
