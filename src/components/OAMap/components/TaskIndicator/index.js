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
const TaskIndicator = ({ number, address }) => {
  const classes = useStyles()

  return (
    <Box display="flex" justifyContent="center" whiteSpace="nowrap">
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
        <Box mx={0.5} textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
          <Typography variant="body1" className={classes.label}>
            {`${address.city} ${address.postcode}`}
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default TaskIndicator
