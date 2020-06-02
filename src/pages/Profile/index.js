import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from 'components/Avatar'
import Location from './components/Location'
import Badge from './components/Badge'
import Status from './components/Status'
import Information from './components/Information'
import About from './components/About'
import Posts from './components/Posts'

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.grey[100],
    height: 'calc(100vh - 231px)',
    marginTop: 150,
    borderRadius: '30px 30px 0px 0px',
    display: 'flex',
    flexDirection: 'column',
  },
  postContent: {
    height: '25%',
    borderRadius: '30px 30px 0px 0px',
    backgroundColor: theme.palette.grey[300],
  },
  avatar: {
    transform: 'translate(0, -50%)',
    left: `calc(50% - ${theme.spacing(12 / 2)}px)`,
    position: 'absolute',
  },
}))
const ProfilePage = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.content}>
        <Box display="flex" flexGrow={1}>
          <Box className={classes.avatar} position="absolute">
            <Avatar size={12} />
          </Box>

          <Box mt={7} display="flex" flexDirection="column" flexGrow={1} alignItems="center">
            <Location />
            <Box my={1}>
              <Badge />
              <Status />
            </Box>

            <About />
            <Information />
          </Box>
        </Box>
        <Box className={classes.postContent}>
          <Posts />
        </Box>
      </Box>
    </>
  )
}

export default ProfilePage
