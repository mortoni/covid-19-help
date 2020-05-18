import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Stepper, Step, StepLabel, Button, Grid, Box, Typography, TextField } from '@material-ui/core'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowNextIcon from '@material-ui/icons/ArrowForward'
import EmptyCheckboxIcon from '@material-ui/icons/CheckBoxOutlineBlank'

import { KeyboardDatePicker } from '@material-ui/pickers'
import ColorlibConnector from './components/ColorlibConnector'
import StepIcon from './components/StepIcon'

const useStyles = makeStyles((theme) => ({
  button: {
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
}))

const Step0 = () => {
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

const Step1 = () => {
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

const Step2 = () => {
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

const Step3 = () => {
  const classes = useStyles()

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

const Step4 = () => {
  const classes = useStyles()
  const [selectedDate, setSelectedDate] = React.useState(new Date())

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h6">When is the best time?</Typography>

      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Date picker inline"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />

      <Box my={2} display="flex" flexDirection="column">
        <Button variant="outlined" color="primary" classes={{ root: classes.button }} endIcon={<EmptyCheckboxIcon />}>
          Morning
        </Button>

        <Button variant="outlined" color="primary" classes={{ root: classes.button }} endIcon={<EmptyCheckboxIcon />}>
          Afternoon
        </Button>

        <Button variant="outlined" color="primary" classes={{ root: classes.button }} endIcon={<EmptyCheckboxIcon />}>
          Evening
        </Button>
      </Box>
    </Box>
  )
}

const OAStepper = () => {
  const steps = ['Type', 'Situation', 'Task', 'Notes', 'When']
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item xs={12}>
          <Box my={2} mx={1} display="flex" justifyContent="center" minHeight={350}>
            {activeStep === 0 && <Step0 />}
            {activeStep === 1 && <Step1 />}
            {activeStep === 2 && <Step2 />}
            {activeStep === 3 && <Step3 />}
            {activeStep === 4 && <Step4 />}
          </Box>
        </Grid>
        <Grid container item xs={12} justify="space-around">
          <Button autoFocus onClick={handleBack} color="primary" startIcon={<ArrowBackIcon />}>
            back
          </Button>
          <Button autoFocus onClick={handleNext} color="primary" endIcon={<ArrowNextIcon />}>
            next
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default OAStepper
