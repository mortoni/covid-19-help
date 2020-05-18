import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, Typography } from '@material-ui/core'
import EmptyCheckboxIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import { KeyboardDatePicker } from '@material-ui/pickers'

const useStyles = makeStyles((theme) => ({
  button: {
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
}))
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

export default Step4
