import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, Typography } from '@material-ui/core'
import EmptyCheckboxIcon from '@material-ui/icons/CheckBoxOutlineBlank'

const useStyles = makeStyles((theme) => ({
  button: {
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
}))

const TaskType = () => {
  const classes = useStyles()

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h6">I'm posting a</Typography>

      <Box my={2} display="flex" flexDirection="column">
        <Button variant="outlined" color="primary" classes={{ root: classes.button }} endIcon={<EmptyCheckboxIcon />}>
          Task(I need help)
        </Button>

        <Button variant="outlined" color="primary" classes={{ root: classes.button }} endIcon={<EmptyCheckboxIcon />}>
          Offer(food, flowers etc)
        </Button>
      </Box>
    </Box>
  )
}

export default TaskType
