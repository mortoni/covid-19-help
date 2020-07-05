import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import { useAuth } from 'context/auth-context'
import { isAfter, addDays } from 'date-fns'

function isShowableOffer({ createdAt, read }) {
  const after = isAfter(addDays(new Date(createdAt), 3), new Date())
  return after || !read
}
// TODO this is being called several times 13 ++
const useNotification = () => {
  const { user } = useAuth()
  const [offers] = useCollection(db.collection('offers').where('taskOwner', '==', user.username))
  const [notifications, setNotifications] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    if (offers) {
      setLoading(true)

      offers.forEach((o) => {
        const offer = o.data()

        if (isShowableOffer(offer)) {
          const p1 = db
            .collection('tasks')
            .doc(offer.taskId)
            .get()
            .then((task) => task.data())

          const p2 = db
            .collection('users')
            .doc(offer.offerOwner)
            .get()
            .then((user) => user.data())

          Promise.all([p1, p2])
            .then(([task, user]) => {
              setLoading(false)

              const item = {
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                taskName: task.name,
                imageUrl: user.imageUrl || '',
                id: offer.offerId,
                read: offer.read,
                createdAt: offer.createdAt,
                taskId: task.taskId,
              }

              setNotifications((prev) => [...prev, item])
            })
            .catch((error) => {
              setLoading(false)
              setError(true)
            })
        }
      })
    }
  }, [offers])

  const _notifications = notifications
    .filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i)
    .filter((offer) => offer.id)

  return [_notifications, loading, error]
}

export default useNotification
