import React, { useState } from 'react'
import { Button, Grid, Box, TextField, Typography } from '@material-ui/core'
import { useAsync } from '../../../../utils/use-async'
import { createTask } from '../../../../utils/task-client'
import { useAuth } from '../../../../context/auth-context'
import { ReactComponent as ConfirmIcon } from '../../../../assets/confirmation.svg'

const OAStepper = ({ handleClose }) => {
  const { user } = useAuth()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [hasSubmitted, setSubmitted] = useState(false)
  const { isLoading, run } = useAsync()

  function handleNameChange(e) {
    if (e.target.value.length <= 25) {
      setName(e.target.value)
    }
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handlePostTask(e) {
    e.preventDefault()
    setSubmitted(true)
    run(createTask({ name, description, address: user.address }))
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid container item xs={12} justify="center">
          {!hasSubmitted && !isLoading && (
            <>
              <Typography variant="h5"> Post a task</Typography>

              <Box my={2} textAlign="center">
                <Typography variant="body1">
                  Name and describe your task so that your good neighbours can help you.
                </Typography>
              </Box>
            </>
          )}
        </Grid>
        <Grid item xs={12}>
          {!hasSubmitted && !isLoading ? (
            <form noValidate autoComplete="off">
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Name of task"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={handleNameChange}
                    helperText={
                      <Box display="flex" justifyContent="flex-end">
                        <Typography>{`${name.length}/ 25 characters`}</Typography>
                      </Box>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Describe your task here"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                </Grid>
              </Grid>
            </form>
          ) : (
            <Box display="flex" flexDirection="column" alignItems="center" mx={12} textAlign="center">
              <Box justifyContent="center" display="flex">
                <ConfirmIcon />
              </Box>
              <Box my={2}>
                <Typography variant="h5">Your task has been published!</Typography>
              </Box>
              <Typography variant="body2">We have let them know. Thanks for the kind offer!</Typography>
            </Box>
          )}
        </Grid>
        <Grid container item xs={12} justify="space-around">
          <Box my={2} mx={5} display="flex" flexGrow={1}>
            {!hasSubmitted && !isLoading ? (
              <Button variant="contained" color="primary" fullWidth onClick={handlePostTask}>
                Post my task
              </Button>
            ) : (
              <Button variant="contained" color="primary" fullWidth onClick={() => handleClose()}>
                Back to dashboard
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default OAStepper
