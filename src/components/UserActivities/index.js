import React from 'react'
import { useAuth } from '../../context/auth-context'
import { db } from '../../firebase'
import TaskTile from '../TaskTile'
import { Box, Typography } from '@material-ui/core'

const UserActivities = () => {
  const { user } = useAuth()
  const [tasks, setTasks] = React.useState([])

  db.collection('tasks')
    .where('username', '==', user.username)
    .get()
    .then((response) => {
      const all = []
      response.forEach((document) => {
        all.push(document.data())
      })

      setTasks(all)
    })

  return (
    <Box display={tasks.length > 0 ? 'block' : 'none'}>
      <Box m={2} display="flex">
        <Typography variant="body2" color="secondary">
          {tasks.length}
        </Typography>
        <Box ml={0.5}>
          <Typography variant="body2">tasks posted by you</Typography>
        </Box>
      </Box>

      {tasks.map((task) => (
        <TaskTile {...task} />
      ))}

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
    </Box>
  )
}

export default UserActivities
