import React from 'react'
import { Box, Paper, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Avatar from 'components/Avatar'
import CachedIcon from '@material-ui/icons/Cached'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(1, 2, 1, 2),
    backgroundColor: '#fafafb',
    '&:hover': {
      backgroundColor: 'white',
      cursor: 'pointer',
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    marginBottom: theme.spacing(1),
  },
  status: {
    display: 'flex',
    border: `1px solid ${theme.palette.grey[200]}`,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(0.5, 1.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
const TaskAroundTile = ({ address, name, username, status }) => {
  const classes = useStyles()

  function getStatus() {
    switch (status) {
      case 'inProgress':
        return (
          <Box className={classes.status}>
            <Typography variant="body2"> in progress</Typography>
            <Box ml={0.5} display="flex" alignItems="center">
              <CachedIcon color="primary" />
            </Box>
          </Box>
        )

      default:
        return null
    }
  }

  return (
    <Box mt={2}>
      <Paper className={classes.paper} elevation={0}>
        <Box className={classes.header}>
          <Typography variant="h5">{name}</Typography>

          <Button color="primary">
            View <ChevronRightIcon />
          </Button>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="flex-end">
          <Box display="flex">
            <Avatar>{username}</Avatar>
            <Box display="flex" flexDirection="column" ml={2}>
              <Typography variant="body1">{username}</Typography>
              <Typography variant="body2">{address.location}</Typography>
            </Box>
          </Box>
          <Box>{getStatus()}</Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default TaskAroundTile
