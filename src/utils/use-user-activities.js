import React from 'react'
import { db } from '../firebase'
import { useAuth } from 'context/auth-context'
import { useDocument } from 'react-firebase-hooks/firestore'
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
  const [tasks, setTasks] = React.useState([])
  const [userData] = useDocument(db.collection('users').doc(user.username))

  React.useEffect(() => {
    if (userData) {
      const { acceptedTasks } = userData.data()

      if (acceptedTasks) {
        db.collection('tasks')
          .where('taskId', 'in', acceptedTasks)
          .get()
          .then((docs) => {
            const all = []

            docs.forEach((doc) => {
              all.push(doc.data())
            })

            setTasks(all)
          })
      }
    }
  }, [userData])

  return { acceptedTasks: tasks }
}
