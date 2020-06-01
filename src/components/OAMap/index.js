import React from 'react'
import GoogleMapReact from 'google-map-react'
import usePosition from '../../utils/use-position'
import { getDistance, DEFAULT_TASKS_RADIUS } from '../../utils/geo-help'
import { useAuth } from '../../context/auth-context'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { db } from '../../firebase'
import { ReactComponent as PinIcon } from '../../assets/icons/pin.svg'
import TaskIndicator from './components/TaskIndicator'
import { TasksContext } from '../../context/task-context'

const useStyles = makeStyles((theme) => ({
  taskMarker: {
    borderRadius: '100%',
    width: 20,
    backgroundColor: theme.palette.primary.main,
    border: '2px solid white',
    height: 20,
  },
}))

const UserMarker = () => <PinIcon />

const TaskMarker = ({ className, lat, lng, user, isHover }) => {
  const theme = useTheme()

  if (lat === user.address.lat || lng === user.address.lng) {
    return null
  }

  return (
    <Box
      className={className}
      style={{ backgroundColor: isHover ? theme.palette.secondary.main : theme.palette.primary.main }}
    />
  )
}

const OAMap = () => {
  const { user } = useAuth()
  const { tasks } = React.useContext(TasksContext)
  const classes = useStyles()
  const { lat, lng } = usePosition()
  const [dbTasks, setDbTasks] = React.useState([])
  const [maps, setMaps] = React.useState(null)
  const isLoading = false

  React.useEffect(() => {
    if (maps) {
      // TODO move this logic to a hook

      db.collection('tasks').onSnapshot(({ docs }) => {
        const all = []
        docs.forEach((document) => {
          const task = document.data()
          const distance = getDistance(lat, lng, task.address.lat, task.address.lng).toFixed(1)

          if (distance <= DEFAULT_TASKS_RADIUS && task.username !== user.username) {
            all.push({ ...document.data(), id: document.id })
          }
        })

        setDbTasks(all)
      })
    }
  }, [lat, lng, maps, user.username])

  const handleApiLoaded = ({ map, maps }) => {
    setMaps(maps)
  }

  if (!isLoading && lat && lng) {
    return (
      <div style={{ height: '100%', width: '100%', position: 'relative' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBKUWpYchxkzUgQhFXiyegsCyZKDricnus' }}
          defaultCenter={{
            lat,
            lng,
          }}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded({ map, maps })}
        >
          <UserMarker lat={user.address.lat} lng={user.address.lng} />
          {dbTasks.map((task) => (
            <TaskMarker
              user={user}
              isHover={task.id === tasks.onHover}
              key={task.id}
              lat={task.address.lat}
              lng={task.address.lng}
              className={classes.taskMarker}
            />
          ))}
        </GoogleMapReact>
        <TaskIndicator number={dbTasks.length} address={user.address} />
      </div>
    )
  } else {
    return <>Loading...</>
  }
}

export default OAMap
