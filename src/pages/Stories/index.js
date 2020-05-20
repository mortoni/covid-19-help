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
const StoriesPage = () => {
  const classes = useStyles()

  return (
    <>
      <HomeHeader />
      <Box className={classes.page}>
        <Typography variant="h5">Stories</Typography>
      </Box>
    </>
  )
}

export default StoriesPage
