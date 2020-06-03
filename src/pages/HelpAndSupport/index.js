import React from 'react'
import { Typography, Container, Box, Grid, Divider, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
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
  button: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    display: 'flex',
    alignItems: 'center',
  },
}))
const HelpAndSupport = () => {
  const classes = useStyles()

  return (
    <Box pt={{ xs: 0, sm: 3 }} className={classes.root}>
      <Container maxWidth="sm" component="main" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} container direction="column">
            <Box my={2} textAlign="center">
              <Typography variant="h5">Help and Support</Typography>
            </Box>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" flexDirection="column">
              <Button color="primary" variant="outlined" className={classes.button} onClick={() => {}}>
                Our Privacy Policy
                <Typography color="primary" variant="body2" className={classes.buttonText}>
                  View <ChevronRightIcon />
                </Typography>
              </Button>
            </Box>

            <Box my={3} display="flex" flexDirection="column">
              <Button color="primary" variant="outlined" className={classes.button} onClick={() => {}}>
                Our Terms& Conditions
                <Typography color="primary" variant="body2" className={classes.buttonText}>
                  View <ChevronRightIcon />
                </Typography>
              </Button>
            </Box>

            <Box display="flex" flexDirection="column">
              <Button color="primary" variant="outlined" className={classes.button} onClick={() => {}}>
                Volunteer Code of Conduct
                <Typography color="primary" variant="body2" className={classes.buttonText}>
                  View <ChevronRightIcon />
                </Typography>
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box my={2}>
              <Divider />
            </Box>
          </Grid>

          <Grid item xs={12} container direction="column">
            <Box mt={3} display="flex" justifyContent="center">
              <Box maxWidth={340} width="100%">
                <Button color="primary" variant="contained" onClick={() => {}} fullWidth>
                  Contact us
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HelpAndSupport
