import React from 'react'
import { Box, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    bottom: 40,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    maxWidth: 425,
    height: 50,
    backgroundColor: '#3F3D56',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  label: {
    color: 'white',
  },
}))
const TaskIndicator = ({ number, location }) => {
  const classes = useStyles()

  return (
    <Box display="flex" justifyContent="center" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
      <Paper className={classes.paper}>
        <Box>
          <Typography variant="body1" color="primary">
            {number}
          </Typography>
        </Box>
        <Box mx={0.5}>
          <Typography variant="body1" className={classes.label}>
            tasks near
          </Typography>
        </Box>
        <Box>
          <RoomOutlinedIcon color="primary" />
        </Box>
        <Box mx={0.5} textOverflow="ellipsis">
          <Typography variant="body1" className={classes.label}>
            {location}
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default TaskIndicator
