import React from 'react'
import { Typography } from '@material-ui/core'

const ErrorField = ({ condition, label }) => {
  if (condition) {
    const errorMessage = condition.message.length > 0 ? condition.message : label

    return (
      <Typography variant="caption" color="error">
        {errorMessage}
      </Typography>
    )
  }

  return null
}

export default ErrorField
