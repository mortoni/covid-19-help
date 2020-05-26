import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    justifyContent: 'center',
  },
}))
const AboutPage = () => {
  const classes = useStyles()

  return (
    <Box className={classes.page}>
      <Typography variant="h5">About Page</Typography>
    </Box>
  )
}

export default AboutPage
