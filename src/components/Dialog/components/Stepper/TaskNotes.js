import React from 'react'
import { Box, Typography, TextField } from '@material-ui/core'

const TaskNotes = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h6">Any aditional notes?</Typography>

      <TextField
        id="outlined-multiline-static"
        label=""
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="outlined"
      />

      <Typography variant="body1">You can discuss the details with our helpers via message later.</Typography>
    </Box>
  )
}

export default TaskNotes
