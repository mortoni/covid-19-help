import React from 'react'
import { Typography, Box, Chip, Paper } from '@material-ui/core'
import LocationIcon from '@material-ui/icons/LocationOnOutlined'
import { makeStyles } from '@material-ui/core/styles'
import WatchIcon from '@material-ui/icons/WatchLater'

const useStyles = makeStyles((theme) => ({
  chip: {
    backgroundColor: '#E6F1F2',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
  },
}))
const Card = () => {
  const classes = useStyles()

  return (
    <Box component={Paper} display="flex" flexDirection="column" p={2} maxHeight={100} mx={2}>
      <Chip label="Have a chat" className={classes.chip} />
      <Box display="flex" mt={2}>
        <Box component={Typography} variant="body2" className={classes.text} mx={0.5}>
          <WatchIcon color="primary" />
          ASAP
        </Box>
        <Box component={Typography} variant="body2" className={classes.text} mx={0.5}>
          <LocationIcon color="primary" /> 50m
        </Box>
      </Box>
    </Box>
  )
}
const Posts = () => {
  return (
    <Box display="flex" height="100%" alignItems="center" justifyContent="center">
      <Card />
      <Card />
    </Box>
  )
}

export default Posts
