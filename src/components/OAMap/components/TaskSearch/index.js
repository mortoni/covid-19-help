import React from 'react'
import { Box, TextField, InputAdornment, IconButton, SvgIcon } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useTasksAround from 'utils/use-tasks-around'
import { ReactComponent as MapIcon } from 'assets/icons/map.svg'

const TaskSearch = () => {
  const [search, setSearch] = React.useState('')
  const [toggle, setToggle] = React.useState(false)
  const { tasksAround } = useTasksAround()
  const [filtered, setFiltered] = React.useState([])

  function filterTask(e) {
    setSearch(e.target.value)
    const filteredTasks = tasksAround.filter((t) => t.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)

    setFiltered(filteredTasks)
  }

  return (
    <Box display={{ xs: 'flex', md: 'none' }} justifyContent="center">
      <Box position="absolute" top={16} display="flex" width="100%" padding={{ xs: 1, sm: 2 }}>
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
    </Box>
  )
}

export default TaskSearch
