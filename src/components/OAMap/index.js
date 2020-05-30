import React from 'react'
import GoogleMapReact from 'google-map-react'
import usePosition from '../../utils/use-position'
import { getDistance, DEFAULT_TASKS_RADIUS } from '../../utils/geo-help'
import { useAuth } from '../../context/auth-context'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { db } from '../../firebase'
import { ReactComponent as PinIcon } from '../../assets/icons/pin.svg'
import TaskIndicator from './components/TaskIndicator'

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

const TaskMarker = ({ className, lat, lng, user }) => {
  if (lat === user.address.lat || lng === user.address.lng) {
    return null
  }

  return <Box className={className} />
}

const OAMap = () => {
  const { user } = useAuth()
  const classes = useStyles()
  const { lat, lng } = usePosition()
  const [tasks, setTasks] = React.useState([])
  const [maps, setMaps] = React.useState(null)
  const isLoading = false

  if (maps) {
    db.collection('tasks')
      .get()
      .then((response) => {
        const all = []
        response.forEach((document) => {
          const task = document.data()
          const distance = getDistance(lat, lng, task.address.lat, task.address.lng).toFixed(1)

          if (distance <= DEFAULT_TASKS_RADIUS) {
            all.push(document.data())
          }
        })

        setTasks(all)
      })
  }

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
          {tasks.map((task) => (
            <TaskMarker
              user={user}
              key={task.userId}
              lat={task.address.lat}
              lng={task.address.lng}
              className={classes.taskMarker}
            />
          ))}
        </GoogleMapReact>
        <TaskIndicator number={tasks.length} location={user.address.location} />
      </div>
    )
  } else {
    return <>Loading...</>
  }
}

export default OAMap
