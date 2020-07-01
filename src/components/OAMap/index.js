import React from 'react'
import GoogleMapReact from 'google-map-react'
import { useAuth } from 'context/auth-context'
import { ReactComponent as PinIcon } from 'assets/icons/pin.svg'
import TaskIndicator from './components/TaskIndicator'
import { TasksContext } from 'context/task-context'
import useTasksAround from 'utils/use-tasks-around'
import TaskMarker from './components/TaskMarker'
import TaskSearch from './components/TaskSearch'

const UserMarker = () => <PinIcon />

const OAMap = () => {
  const { user } = useAuth()
  const { tasks } = React.useContext(TasksContext)
  const { tasksAround } = useTasksAround()
  const isLoading = false

  const mapOptions = {
    fullscreenControl: false,
    zoomControl: false,
  }

  if (!isLoading && tasksAround) {
    return (
      <div style={{ height: '100%', width: '100%', position: 'relative' }}>
        <GoogleMapReact
          options={mapOptions}
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
          defaultCenter={{
            lat: user.address.lat,
            lng: user.address.lng,
          }}
          defaultZoom={14}
          // yesIWantToUseGoogleMapApiInternals
          // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded({ map, maps })}
        >
          <UserMarker lat={user.address.lat} lng={user.address.lng} />
          {tasksAround.map((task) => (
            <TaskMarker
              key={task.id}
              lat={task.address.lat}
              lng={task.address.lng}
              taskId={task.id}
              tasksService={tasks}
            />
          ))}
        </GoogleMapReact>
        <TaskIndicator number={tasksAround.length} address={user.address} />
        <TaskSearch />
      </div>
    )
  } else {
    return <>Loading...</>
  }
}

export default OAMap
