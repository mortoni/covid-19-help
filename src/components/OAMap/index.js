import React from 'react'
import GoogleMapReact from 'google-map-react'
import Grid from '@material-ui/core/Grid'
import OAmapPin from '../../assets/logo.png'
import { useAsync } from '../../utils/use-async'
import { getTasks } from '../../utils/task-client'
import usePosition from '../../utils/use-position'
import { useAuth } from '../../context/auth-context'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { db } from '../../firebase'

const useStyles = makeStyles((theme) => ({
  taskMarker: {
    borderRadius: '100%',
    width: 20,
    backgroundColor: theme.palette.primary.main,
    border: '2px solid white',
    height: 20,
  },
}))

const UserMarker = () => (
  <Grid container direction="column" alignItems="center" style={{ width: 30 }}>
    <img alt="" src={OAmapPin} width="40px" />
    <p style={{ textAlign: 'center', backgroundColor: '#fff', padding: '0 3px' }}></p>
  </Grid>
)

const TaskMarker = ({ className, lat, lng, user }) => {
  if (lat === user.address.lat || lng === user.address.lng) {
    return null
  }

  return <Box className={className} />
}

const OAMap = () => {
  const { user } = useAuth()
  const classes = useStyles()
  const { data, status, error, isLoading, isIdle, isError, isSuccess, run, setData } = useAsync()
  const { lat, lng } = usePosition()

  // debugger

  React.useEffect(() => {
    run(getTasks())

    db.ref('tasks').on('value', (snapshot) => {
      debugger
    })
  }, [run])

  const handleApiLoaded = ({ map, maps }) => {}

  if (!isLoading && lat && lng) {
    return (
      <div style={{ height: '100%', width: '100%' }}>
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
          {data.map((task) => (
            <TaskMarker
              user={user}
              key={task.userId}
              lat={task.address.lat}
              lng={task.address.lng}
              className={classes.taskMarker}
            />
          ))}
        </GoogleMapReact>
      </div>
    )
  } else {
    return <>Loading...</>
  }
}

export default OAMap
