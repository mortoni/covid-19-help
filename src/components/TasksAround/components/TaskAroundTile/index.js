import React from 'react'
import { Box, Paper, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Avatar from '../../../Avatar'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    marginBottom: theme.spacing(1),
  },
}))
const TaskAroundTile = ({ address, name, username }) => {
  const classes = useStyles()

  return (
    <Box mt={2}>
      <Paper className={classes.paper} elevation={0}>
        <Box className={classes.header}>
          <Typography variant="h5">{name}</Typography>

          <Button color="primary">
            View <ChevronRightIcon />
          </Button>
        </Box>

        <Box display="flex">
          <Avatar>{username}</Avatar>
          <Box display="flex" flexDirection="column" ml={2}>
            <Typography variant="body1">{username}</Typography>
            <Typography variant="body2">{address.location}</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default TaskAroundTile
