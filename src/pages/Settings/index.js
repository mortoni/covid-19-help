import React from 'react'
import { Typography, Container, Box, Grid, Divider, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SettingsForm from 'components/forms/Settings'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[200],
    height: '100%',
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
}))
const SettingsPage = () => {
  const classes = useStyles()

  return (
    <Box pt={{ xs: 0, sm: 3 }} className={classes.root}>
      <Container maxWidth="sm" component="main" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} container direction="column">
            <Box my={2} textAlign="center">
              <Typography variant="h5">Settings</Typography>
            </Box>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Box my={3}>
              <SettingsForm />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box my={2}>
              <Divider />
            </Box>
          </Grid>

          <Grid item xs={12} container direction="column">
            <Button color="secondary" onClick={() => {}}>
              Report an issue
            </Button>

            <Button color="secondary" onClick={() => {}}>
              Delete account
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default SettingsPage
