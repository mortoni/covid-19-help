import React from 'react'
import { Typography, Box, Chip } from '@material-ui/core'
import Logo from '../../../../assets/logo.png'
import { makeStyles } from '@material-ui/core/styles'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

const useStyles = makeStyles((theme) => ({
  chip: {
    backgroundColor: '#3F3D56',
    height: 45,
    display: 'flex',
    justifyContent: 'space-between',
  },
  label: {
    color: '#fff',
  },
}))
const Badge = () => {
  const classes = useStyles()
  const Label = () => (
    <Box ml={2} display="flex">
      <Typography variant="body1" className={classes.label}>
        Good Neighbour badges 3
      </Typography>

      <Box ml={4}>
        <InfoOutlinedIcon color="primary" />
      </Box>
    </Box>
  )

  const Avatar = () => (
    <Box mx={2}>
      <img src={Logo} alt="Logo" width={32} height={32} />
    </Box>
  )

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Chip className={classes.chip} avatar={<Avatar />} label={<Label />} />
    </Box>
  )
}

export default Badge
