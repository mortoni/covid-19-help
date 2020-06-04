import React from 'react'
import { Typography, Container, Box, Grid, Divider, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useUserActivities from 'utils/use-user-activities'
import { AUTHENTICATED_ROUTES } from 'routes'
import { navigate } from '@reach/router'
import format from 'date-fns/format'
import NotificationBadge from 'components/NotificationBadge'
import OfferTile from 'components/OfferTile'

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
const Task = ({ location }) => {
  const classes = useStyles()
  const { userTasks } = useUserActivities()
  const [task, setTask] = React.useState(null)

  React.useEffect(() => {
    if (userTasks) {
      userTasks.forEach((task) => {
        if (task.id === location.state.taskId) {
          // update offer to read
          setTask(task)
        }
      })
    }
  }, [location.state, location.state.taskId, userTasks])

  if (!task) {
    return null
  }

  return (
    <Box pt={{ xs: 0, sm: 3 }} className={classes.root}>
      <Container maxWidth="sm" component="main" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} container direction="column">
            <Box my={2} textAlign="center">
              <Typography variant="h5">{task.name}</Typography>
            </Box>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Box>
              <Typography variant="body2">Posted by you on {format(new Date(task.createdAt), 'dd/MM/yyyy')}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box my={2}>
              <Typography component="p" variant="body1">
                {task.description}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} container alignItems="center">
            <NotificationBadge>{task.offers.length}</NotificationBadge>
            <Box ml={2}>
              <Typography variant="h6">Your offers</Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box mb={2}>
              <Divider />
            </Box>
          </Grid>

          <Grid item xs={12}>
            {/* TODO: add key */}
            {task.offers.map((offer) => (
              <OfferTile {...offer} taskId={task.id} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Task
