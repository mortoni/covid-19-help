import React from 'react'
import { Box } from '@material-ui/core'

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      flexGrow={1}
      {...other}
    >
      {value === index && (
        <Box display="flex" flexDirection="column" flexGrow={1} height="100%">
          {children}
        </Box>
      )}
    </Box>
  )
}

export default TabPanel
