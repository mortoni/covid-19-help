import React from 'react'
import { Box, TextField, InputAdornment, Typography, IconButton, SvgIcon, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import TaskAroundTile from './components/TaskAroundTile'
import useTasksAround from 'utils/use-tasks-around'
import { ReactComponent as MapIcon } from 'assets/icons/map.svg'
import OAMap from 'components/OAMap'

const TaskAround = () => {
  const [search, setSearch] = React.useState('')
  const [toggle, setToggle] = React.useState(false)
  const { tasksAround } = useTasksAround()
  const [filtered, setFiltered] = React.useState([])

  function filterTask(e) {
    setSearch(e.target.value)
    const filteredTasks = tasksAround.filter((t) => t.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)

    setFiltered(filteredTasks)
  }

  if (!tasksAround) {
    // TODO this logic is related to the component results and not the whole component
    return null
  }

  const tasks = search.length > 0 ? filtered : tasksAround //TODO move this logic to the tasks context
  // const mapDisplay = toggle ? 'flex' : 'none'
  // debugger

  return (
    <>
      <Box m={2} display={toggle ? 'none' : 'block'}>
        <Box display="flex">
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
          <Box display={{ xs: 'flex', md: 'none' }} ml={{ xs: 2, md: 0 }}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setToggle(true)}
            >
              <SvgIcon component={MapIcon} style={{ fontSize: 30, marginTop: 4 }} />
            </IconButton>
          </Box>
        </Box>

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

      <Box display={{ xs: 'flex', md: 'none' }} height="100%">
        <Box display={toggle ? 'flex' : 'none'} height="100%" flex={1}>
          <OAMap />
        </Box>
      </Box>
    </>
  )
}

export default TaskAround
