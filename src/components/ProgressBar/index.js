import React from 'react'
import { SharedContext } from 'context/shared-context'
import { LinearProgress, Box } from '@material-ui/core'

const ProgressBar = () => {
  const { shared } = React.useContext(SharedContext)
  return (
    <>
      {shared.inProgress && (
        <Box position="absolute" top={0} width="100%">
          <LinearProgress color="secondary" />
        </Box>
      )}
    </>
  )
}

export default ProgressBar
