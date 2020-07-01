import React from 'react'
import { Box } from '@material-ui/core'

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box height="100%">{children}</Box>}
    </Box>
  )
}

export default TabPanel
