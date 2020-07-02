import React from 'react'
import { Box, TextField, InputAdornment, Typography, SvgIcon, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import TaskAroundTile from './components/TaskAroundTile'
import useTasksAround from 'utils/use-tasks-around'
import { ReactComponent as MapIcon } from 'assets/icons/map.svg'
import OAMap from 'components/OAMap'
import { makeStyles } from '@material-ui/core/styles'
import { SharedContext } from 'context/shared-context'

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
  },
}))
const TaskAround = () => {
  const classes = useStyles()
  const [search, setSearch] = React.useState('')
  const { tasksAround } = useTasksAround()
  const [filtered, setFiltered] = React.useState([])
  const { shared, dispatch } = React.useContext(SharedContext)

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

  return (
    <>
      <Box mx={{ xs: 1, sm: 2 }} my={2} display={shared.toggledMap ? 'none' : 'flex'}>
        <Box display="flex" flexGrow={1}>
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
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => dispatch({ type: 'toggleMap', value: true })}
            >
              <SvgIcon component={MapIcon} style={{ fontSize: 30, marginTop: 4 }} />
            </Button>
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

      <Box display={{ xs: 'flex', md: 'none' }} flexGrow={1}>
        <Box display={shared.toggledMap ? 'flex' : 'none'} flexGrow={1}>
          <OAMap />
        </Box>
      </Box>
    </>
  )
}

export default TaskAround
