import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField } from '@material-ui/core'
import ErrorField from 'components/ErrorField'

function capitalize(label) {
  return label.charAt(0).toUpperCase() + label.slice(1)
}

const OATextField = ({ name, control, errors, label, required, ...other }) => {
  return (
    <Controller
      as={TextField}
      name={name}
      id={name}
      label={label ? label : capitalize(name)}
      variant="outlined"
      control={control}
      helperText={<ErrorField condition={errors[name]} label={`${capitalize(name)} is required.`} />}
      error={errors[name]}
      rules={{ required: required ? true : false }}
      {...other}
    />
  )
}

export default OATextField
