import React, { useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Stepper, Step, StepLabel, StepConnector, Button, Grid, Box, Typography, TextField } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import VideoLabelIcon from '@material-ui/icons/VideoLabel'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowNextIcon from '@material-ui/icons/ArrowForward'
import EmptyCheckboxIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import clsx from 'clsx'
import { KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
})

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector)

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles()
  const { active, completed } = props

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  }

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  )
}

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
        variant="outlined"
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
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item xs={12}>
          <Box my={2} mx={1} display="flex" justifyContent="center">
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
