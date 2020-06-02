import React from 'react'
import { Box, Paper, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Avatar from 'components/Avatar'
import { TasksContext } from 'context/task-context'
import Dialog from 'components/Dialog'
import OfferToHelp from '../OfferToHelp'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: '#fafafb',
    '&:hover': {
      backgroundColor: 'white',
      cursor: 'pointer',
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    marginBottom: theme.spacing(1),
  },
}))
const TaskAroundTile = ({ createdAt, description, address, name, username, id }) => {
  const classes = useStyles()
  const { dispatch } = React.useContext(TasksContext)
  const [open, setOpen] = React.useState(false)

  function handleSelect() {
    dispatch({ type: 'selectTask', value: { createdAt, description, name, username, id } })
    setOpen(true)
  }

  return (
    <Box mt={2}>
      <Paper
        onClick={() => handleSelect()}
        className={classes.paper}
        elevation={0}
        onMouseEnter={() => dispatch({ type: 'hover', value: id })}
        onMouseLeave={() => dispatch({ type: 'hover', value: null })}
      >
        <Box className={classes.header}>
          <Typography variant="h5">{name}</Typography>

          <Button color="primary">
            View <ChevronRightIcon />
          </Button>
        </Box>
        <Box display="flex">
          <Avatar>{username}</Avatar>
          <Box display="flex" flexDirection="column" ml={2}>
            <Typography variant="body1">{username}</Typography>
            <Typography variant="body2">{address.location}</Typography>
          </Box>
        </Box>
      </Paper>
      <Dialog open={open} setOpen={setOpen}>
        <OfferToHelp />
      </Dialog>
    </Box>
  )
}

export default TaskAroundTile
