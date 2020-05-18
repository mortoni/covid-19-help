import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, Typography, TextField } from '@material-ui/core'
import EmptyCheckboxIcon from '@material-ui/icons/CheckBoxOutlineBlank'

const useStyles = makeStyles((theme) => ({
  button: {
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
}))
const TaskSelection = () => {
  const classes = useStyles()

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h6">Select a Task</Typography>

      <Box my={2} display="flex" flexDirection="column">
        <Button variant="outlined" color="primary" classes={{ root: classes.button }} endIcon={<EmptyCheckboxIcon />}>
          Dog Walking
        </Button>

        <Button variant="outlined" color="primary" classes={{ root: classes.button }} endIcon={<EmptyCheckboxIcon />}>
          Run an errand
        </Button>

        <Button variant="outlined" color="primary" classes={{ root: classes.button }} endIcon={<EmptyCheckboxIcon />}>
          Grocery shopping
        </Button>

        <Button variant="outlined" color="primary" classes={{ root: classes.button }} endIcon={<EmptyCheckboxIcon />}>
          Have a chat
        </Button>

        <TextField id="outlined-basic" label="Other" variant="outlined" />
      </Box>
    </Box>
  )
}
export default TaskSelection
