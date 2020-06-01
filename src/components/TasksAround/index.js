import React from 'react'
import { Box, TextField, InputAdornment, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useAuth } from '../../context/auth-context'
import { getDistance, DEFAULT_TASKS_RADIUS } from '../../utils/geo-help'
import { db } from '../../firebase'
import TaskAroundTile from './components/TaskAroundTile'

const TaskAround = () => {
  const [search, setSearch] = React.useState('')
  const [tasks, setTasks] = React.useState([])
  const [filtered, setFiltered] = React.useState([])
  const { user } = useAuth()

  function filterTask(e) {
    setSearch(e.target.value)
    const filteredTasks = tasks.filter((t) => t.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)

    setFiltered(filteredTasks)
  }

  React.useEffect(() => {
    // TODO move this logic to a hook
    db.collection('tasks')
      .get()
      .then((response) => {
        const all = []
        response.forEach((document) => {
          const task = document.data()
          const distance = getDistance(user.address.lat, user.address.lng, task.address.lat, task.address.lng).toFixed(
            1,
          )

          if (distance <= DEFAULT_TASKS_RADIUS && task.username !== user.username) {
            all.push({ ...document.data(), id: document.id })
          }
        })

        setTasks(all)
      })
  }, [user.address.lat, user.address.lng, user.username])

  const displayingTasks = search.length > 0 ? filtered : tasks //TODO move this logic to the tasks context

  return (
    <Box m={2}>
      <TextField
        id="search-task"
        variant="outlined"
        placeholder="Search"
        value={search}
        onChange={filterTask}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
        fullWidth
      />

      <Box display={displayingTasks.length > 0 ? 'block' : 'none'}>
        <Box my={2} display="flex">
          <Typography variant="body2" color="secondary">
            {displayingTasks.length}
          </Typography>
          <Box ml={0.5}>
            <Typography variant="body2">tasks around you</Typography>
          </Box>
        </Box>

        <Box>
          {displayingTasks.map((task) => (
            <TaskAroundTile key={task.id} {...task} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default TaskAround
