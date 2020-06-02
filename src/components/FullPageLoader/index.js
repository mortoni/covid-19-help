import React from 'react'
import Loader from 'react-spinners/ClimbingBoxLoader'
import { Box } from '@material-ui/core'

const FullPageLoader = () => (
  <Box height="100%" display="flex" justifyContent="center" alignItems="center" flexGrow={1}>
    <Loader size={15} color={'#6C63FF'} loading />
  </Box>
)

export default FullPageLoader
