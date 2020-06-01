import React from 'react'
import { Box, TextField, InputAdornment, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import TaskAroundTile from './components/TaskAroundTile'
import useTasksAround from '../../utils/use-tasks-around'

const TaskAround = () => {
  const [search, setSearch] = React.useState('')
  const { tasksAround } = useTasksAround()
  const [filtered, setFiltered] = React.useState([])

  function filterTask(e) {
    setSearch(e.target.value)
    const filteredTasks = tasksAround.filter((t) => t.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)

    setFiltered(filteredTasks)
  }

  if (!tasksAround) {
    return null
  }

  const tasks = search.length > 0 ? filtered : tasksAround //TODO move this logic to the tasks context

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

      <Box display={tasks.length > 0 ? 'block' : 'none'}>
        <Box my={2} display="flex">
          <Typography variant="body2" color="secondary">
            {tasks.length}
          </Typography>
          <Box ml={0.5}>
            <Typography variant="body2">tasks around you</Typography>
          </Box>
        </Box>

        <Box>
          {tasks.map((task) => (
            <TaskAroundTile key={task.id} {...task} />
          ))}
        </Box>
      </Box>

      <Box display={search.length > 0 && tasks.length === 0 ? 'block' : 'none'} mt={2}>
        <Typography variant="body2">We found 0 task with this term</Typography>
      </Box>
    </Box>
  )
}

export default TaskAround
