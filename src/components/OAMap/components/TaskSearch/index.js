import React from 'react'
import { Box, TextField, InputAdornment, SvgIcon, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useTasksAround from 'utils/use-tasks-around'
import { ReactComponent as ListIcon } from 'assets/icons/list.svg'
import { makeStyles } from '@material-ui/core/styles'
import { SharedContext } from 'context/shared-context'

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    color: 'transparent',
  },
}))
const TaskSearch = () => {
  const classes = useStyles()
  const { dispatch } = React.useContext(SharedContext)
  const [search, setSearch] = React.useState('')
  const { tasksAround } = useTasksAround()
  const [filtered, setFiltered] = React.useState([])

  function filterTask(e) {
    setSearch(e.target.value)
    const filteredTasks = tasksAround.filter((t) => t.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)

    setFiltered(filteredTasks)
  }

  return (
    <Box display={{ xs: 'flex', md: 'none' }} justifyContent="center">
      <Box position="absolute" top={16} display="flex" width="100%" px={{ xs: 1, sm: 2 }}>
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
            onClick={() => dispatch({ type: 'toggleMap', value: false })}
          >
            <SvgIcon component={ListIcon} style={{ fontSize: 30, marginTop: 4 }} />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default TaskSearch
