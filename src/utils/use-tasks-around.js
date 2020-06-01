import React from 'react'
import { getDistance, DEFAULT_TASKS_RADIUS } from './geo-help'
import { db } from '../firebase'
import { useAuth } from '../context/auth-context'

// TODO loading indicator
const useTasksAround = () => {
  const [tasksAround, setTasksAround] = React.useState(null)
  const { user } = useAuth()

  React.useEffect(() => {
    db.collection('tasks').onSnapshot(({ docs }) => {
      const all = []
      docs.forEach((document) => {
        const task = document.data()
        const distance = getDistance(user.address.lat, user.address.lng, task.address.lat, task.address.lng).toFixed(1)

        if (distance <= DEFAULT_TASKS_RADIUS && task.username !== user.username) {
          all.push({ ...document.data(), id: document.id })
        }
      })

      setTasksAround(all)
    })
  }, [user.address.lat, user.address.lng, user.username])

  return { tasksAround }
}

export default useTasksAround
