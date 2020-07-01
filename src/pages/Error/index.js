import React from 'react'
import Background from 'assets/background.png'
import { Box } from '@material-ui/core'

const PageErrorFallback = () => {
  // debugger

  return (
    <Box>
      {/* <>FullPageErrorFallback</> */}
      Your firebase token has expired, we need to refresh it. it is on our todo list
    </Box>
  )
}

export default PageErrorFallback
