import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { Typography, Button } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(1, 2, 1, 2),
  },
}))

export default function TaskTile({ name }) {
  const classes = useStyles()

  return (
    <Box mt={2}>
      <Paper className={classes.paper} elevation={0}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body1">{name}</Typography>

          <Button color="primary">
            View <ChevronRightIcon />
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}
