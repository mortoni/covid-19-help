import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  taskMarker: {
    borderRadius: '100%',
    width: ({ isHover }) => (isHover ? 25 : 20),
    backgroundColor: ({ isHover }) => (isHover ? theme.palette.secondary.main : theme.palette.primary.main),
    border: '2px solid white',
    height: ({ isHover }) => (isHover ? 25 : 20),
  },
}))
const TaskMarker = ({ taskId, tasksService }) => {
  const classes = useStyles({ isHover: taskId === tasksService.onHover })

  return <Box className={classes.taskMarker} />
}

export default TaskMarker
