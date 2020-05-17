import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import { Dialog, Slide } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowNextIcon from '@material-ui/icons/ArrowForward'
import DialogActions from './components/DialogActions'
import DialogContent from './components/DialogContent'
import DialogTitle from './components/DialogTitle'
import Stepper from './components/Stepper'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})

export default function OADialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} />
        <DialogContent>
          <Stepper />
        </DialogContent>
      </Dialog>
    </div>
  )
}
