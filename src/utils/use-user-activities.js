import React from 'react'
import { db } from '../firebase'
import { useAuth } from '../context/auth-context'

// TODO loading indicator
const useUserActivities = () => {
  const [userTasks, setTasks] = React.useState(null)
  const { user } = useAuth()

  React.useEffect(() => {
    db.collection('tasks')
      .where('username', '==', user.username)
      .onSnapshot(({ docs }) => {
        const all = []
        docs.forEach((document) => {
          const task = document.data()

          all.push({ ...task, id: document.id })
        })

        setTasks(all)
      })
  }, [user.username])

  return { userTasks }
}

export default useUserActivities
