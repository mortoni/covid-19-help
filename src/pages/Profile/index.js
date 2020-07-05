import React from 'react'
import { Box, Container, Grid, Typography, Divider, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LocationIcon from '@material-ui/icons/LocationOnOutlined'
import { useAuth } from 'context/auth-context'
import Status from './components/Status'
import EditableAvatar from './components/EditableAvatar'

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.grey[100],
    height: 'calc(100vh - 231px)',
    marginTop: 150,
    borderRadius: '30px 30px 0px 0px',
    display: 'flex',
    flexDirection: 'column',
  },
  postContent: {
    height: '25%',
    borderRadius: '30px 30px 0px 0px',
    backgroundColor: theme.palette.grey[300],
  },
  avatar: {
    transform: 'translate(0, -50%)',
    left: `calc(50% - ${theme.spacing(12 / 2)}px)`,
    position: 'absolute',
  },
  root: {
    backgroundColor: theme.palette.grey[200],
    flexGrow: 1,
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
}))
const ProfilePage = () => {
  const { user } = useAuth()
  const classes = useStyles()

  return (
    <Box pt={{ xs: 0, sm: 3 }} className={classes.root}>
      <Container maxWidth="sm" component="main" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} container direction="column">
            <Box my={2} textAlign="center">
              <Typography variant="h5">Profile</Typography>
            </Box>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Box my={3} display="flex" alignItems="center" flexDirection="column">
              <Box position="relative" pr={3} pt={2}>
                <EditableAvatar {...user} />
              </Box>
              <Box my={2}>
                <Typography variant="h4">{`${user.firstName} ${user.lastName}`}</Typography>
              </Box>
              <Box display="flex">
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
                <Button color="primary" onClick={() => {}}>
                  Edit
                </Button>
              </Box>
              I’m 32 years old, healthy. I have a car and am more than happy to help when it comes to running errands.
              However, I have 4 kids and a dog am quite busy on a general basis. I would be happy if anyone could help
              me walk my dogs whenever possible.
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ProfilePage
