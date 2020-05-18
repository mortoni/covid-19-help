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

const TaskSituation = () => {
  const classes = useStyles()

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h6">Describe your situation</Typography>

      <Box my={2} display="flex" flexDirection="column">
        <Button variant="outlined" color="primary" classes={{ root: classes.button }} endIcon={<EmptyCheckboxIcon />}>
          Single Parent
        </Button>

        <Button variant="outlined" color="primary" classes={{ root: classes.button }} endIcon={<EmptyCheckboxIcon />}>
          Elderly above 65+
        </Button>

        <Button variant="outlined" color="primary" classes={{ root: classes.button }} endIcon={<EmptyCheckboxIcon />}>
          Disabled
        </Button>

        <Button variant="outlined" color="primary" classes={{ root: classes.button }} endIcon={<EmptyCheckboxIcon />}>
          Health Condition
        </Button>

        <TextField id="outlined-basic" label="Other" variant="outlined" />
      </Box>
    </Box>
  )
}

export default TaskSituation
