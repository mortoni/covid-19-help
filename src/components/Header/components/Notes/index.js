import React, { useState } from 'react'
import { IconButton, Button, Box } from '@material-ui/core'
import NotesIcon from '@material-ui/icons/Notes'

const Notes = () => {
  return (
    <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="primary">
      <NotesIcon style={{ fontSize: 30 }} />
    </IconButton>
  )
}

export default Notes
