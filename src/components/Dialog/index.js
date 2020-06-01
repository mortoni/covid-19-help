import React, { forwardRef } from 'react'
import { Dialog, Slide, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import DialogContent from './components/DialogContent'
import DialogTitle from './components/DialogTitle'

const Transition = forwardRef((props, ref) => <Slide direction="down" ref={ref} {...props} />)

const OADialog = ({ open, setOpen, children }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="dialog"
        open={open}
        TransitionComponent={Transition}
        fullScreen={fullScreen}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle id="dialog" onClose={handleClose} />
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  )
}

export default OADialog
