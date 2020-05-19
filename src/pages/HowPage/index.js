import React from 'react'
import { Typography, Box } from '@material-ui/core'
import HomeHeader from '../../components/HomeHeader'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    justifyContent: 'center',
  },
}))
const HowPage = () => {
  const classes = useStyles()

  return (
    <>
      <HomeHeader />
      <Box className={classes.page}>
        <Typography variant="h5">How does it work page.</Typography>
      </Box>
    </>
  )
}

export default HowPage
