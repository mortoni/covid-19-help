import React from 'react'
import { ProgressContext } from 'context/progress-contex'
import { LinearProgress, Box } from '@material-ui/core'

const ProgressBar = () => {
  const { progress } = React.useContext(ProgressContext)
  return (
    <>
      {progress.status && (
        <Box position="absolute" top={0} width="100%">
          <LinearProgress color="secondary" />
        </Box>
      )}
    </>
  )
}

export default ProgressBar
