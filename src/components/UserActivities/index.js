import React from 'react'
import TaskTile from '../TaskTile'
import { Box, Typography } from '@material-ui/core'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'
import { makeStyles } from '@material-ui/core/styles'
import useUserActivities from 'utils/use-user-activities'

const useStyles = makeStyles((theme) => ({
  label: {
    display: 'flex',
    alignItems: 'center',
  },
}))
const UserActivities = () => {
  const classes = useStyles()
  const [acceptedTasks, setAcceptedTasks] = React.useState([])
  const { userTasks } = useUserActivities()

  if (!userTasks) {
    return null
  }

  return (
    <>
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
      <Box display={userTasks.length === 0 ? 'flex' : 'none'} m={2}>
        <Typography variant="body2" className={classes.label}>
          You have not posted any tasks yet <HelpOutlineOutlinedIcon color="primary" />
        </Typography>
      </Box>

      <Box display={acceptedTasks.length === 0 ? 'flex' : 'none'} m={2}>
        <Typography variant="body2" className={classes.label}>
          You have not accepted any tasks yet <HelpOutlineOutlinedIcon color="primary" />
        </Typography>
      </Box>
      {/* <Box m={2} display="flex">
        <Typography variant="body2" color="secondary">
          {tasks.length}
        </Typography>
        <Box ml={0.5}>
          <Typography variant="body2">tasks accepted by you</Typography>
        </Box>
      </Box>

      {tasks.map((task) => (
        <TaskTile {...task} />
      ))} */}
    </>
  )
}

export default UserActivities
