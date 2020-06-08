import React from 'react'
import TaskTile from '../TaskTile'
import { Box, Typography } from '@material-ui/core'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'
import { makeStyles } from '@material-ui/core/styles'
import { useUserActivities, useAcceptedTask } from 'utils/use-user-activities'
import AcceptedTaskTile from './components/AcceptedTaskTile'

const useStyles = makeStyles((theme) => ({
  label: {
    display: 'flex',
    alignItems: 'center',
  },
}))
const UserActivities = () => {
  const classes = useStyles()
  const { userTasks } = useUserActivities()
  const { acceptedTasks } = useAcceptedTask()
  console.log('reload')

  return (
    <>
      <Box display={userTasks.length === 0 ? 'flex' : 'none'} m={2}>
        <Typography variant="body2" className={classes.label}>
          You have not posted any tasks yet <HelpOutlineOutlinedIcon color="primary" />
        </Typography>
      </Box>
      <Box display={userTasks.length > 0 ? 'block' : 'none'}>
        <Box m={2} display="flex">
          <Typography variant="body2" color="secondary">
            {userTasks.length}
          </Typography>
          <Box ml={0.5}>
            <Typography variant="body2">tasks posted by you</Typography>
          </Box>
        </Box>

        {userTasks.map((task) => (
          <TaskTile key={task.id} {...task} />
        ))}
      </Box>

      <Box display={acceptedTasks.length === 0 ? 'flex' : 'none'} m={2}>
        <Typography variant="body2" className={classes.label}>
          You have not accepted any tasks yet <HelpOutlineOutlinedIcon color="primary" />
        </Typography>
      </Box>
      <Box display={acceptedTasks.length > 0 ? 'block' : 'none'}>
        <Box m={2} display="flex">
          <Typography variant="body2" color="secondary">
            {acceptedTasks.length}
          </Typography>
          <Box ml={0.5}>
            <Typography variant="body2">tasks accepted by you</Typography>
          </Box>
        </Box>

        {acceptedTasks.map((task) => (
          <AcceptedTaskTile key={task.id} {...task} />
        ))}
      </Box>
    </>
  )
}

export default UserActivities
