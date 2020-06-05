import React from 'react'
import { db } from '../firebase'
import { useAuth } from 'context/auth-context'

// TODO loading indicator
// TODO this looks wrong, look for a better way to perform this
export const useUserActivities = () => {
  const [userTasks, setTasks] = React.useState([])
  const { user } = useAuth()

  React.useEffect(() => {
    const taskRef = db.collection('tasks')

    taskRef.where('username', '==', user.username).onSnapshot(({ docs }) => {
      const all = []
      docs.forEach((document) => {
        const task = document.data()

        all.push({ ...task, id: document.id })
      })

      setTasks(all)
    })
  }, [user.acceptedTasks, user.username])

  return { userTasks }
}

export const useAcceptedTask = () => {
  const { user } = useAuth()
  const [acceptedTasks, setAccepted] = React.useState([])
  const taskRef = db.collection('tasks')

  React.useEffect(() => {
    if (user.acceptedTasks) {
      const all = []
      user.acceptedTasks.forEach((taskId) => {
        taskRef.doc(taskId).onSnapshot((document) => {
          all.push({ ...document.data(), taskId: document.id })
          setAccepted(all)
        })
      })
    }
  }, [taskRef, user.acceptedTasks])

  return { acceptedTasks }
}
