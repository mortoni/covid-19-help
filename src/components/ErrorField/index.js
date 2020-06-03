import React from 'react'
import { Typography } from '@material-ui/core'

const ErrorField = ({ condition, label }) => {
  if (condition) {
    return (
      <Typography variant="caption" color="error">
        {label}
      </Typography>
    )
  }

  return null
}

export default ErrorField
