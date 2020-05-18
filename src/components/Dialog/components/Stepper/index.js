import React, { useState, createElement } from 'react'
import { Stepper, Step, StepLabel, Button, Grid, Box, useMediaQuery } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowNextIcon from '@material-ui/icons/ArrowForward'
import { useTheme } from '@material-ui/core/styles'
import ColorlibConnector from './components/ColorlibConnector'
import StepIcon from './components/StepIcon'
import TaskType from './TaskType'
import TaskSituation from './TaskSituation'
import TaskSelection from './TaskSelection'
import TaskNotes from './TaskNotes'
import TaskDate from './TaskDate'

const OAStepper = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const steps = [
    { label: 'Type', component: TaskType },
    { label: 'Situation', component: TaskSituation },
    { label: 'Task', component: TaskSelection },
    { label: 'Notes', component: TaskNotes },
    { label: 'When', component: TaskDate },
  ]
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
          <Stepper alternativeLabel activeStep={activeStep} connector={isSmall ? null : <ColorlibConnector />}>
            {steps.map(({ label }) => (
              <Step key={label}>
                <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item xs={12}>
          <Box my={2} mx={1} display="flex" justifyContent="center" minHeight={350}>
            {createElement(steps[activeStep].component, {})}
          </Box>
        </Grid>
        <Grid container item xs={12} justify="space-around">
          <Button
            autoFocus
            onClick={handleBack}
            color="primary"
            startIcon={<ArrowBackIcon />}
            disabled={activeStep <= 0}
          >
            back
          </Button>
          <Button autoFocus onClick={handleNext} color="primary" endIcon={<ArrowNextIcon />} disabled={activeStep >= 4}>
            next
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default OAStepper
