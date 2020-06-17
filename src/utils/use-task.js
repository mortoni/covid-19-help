import React from 'react'
import { useCollectionOnce } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'

const useTask = ({ taskId }) => {
  const [item, loading, error] = useCollectionOnce(db.collection('tasks').doc(taskId))
  const [task, setTask] = React.useState()
  const [offers, setOffers] = React.useState([])

  React.useEffect(() => {
    if (item) {
      const newTask = item.data()
      setTask(newTask)

      if (newTask && newTask.offers) {
        db.collection('offers')
          .where('offerId', 'in', newTask.offers)
          .get()
          .then((offers) => {
            offers.forEach((o) => {
              let offer = o.data()

              db.collection('users')
                .doc(offer.offerOwner)
                .get()
                .then((user) => {
                  offer = {
                    ...offer,
                    user: user.data(),
                  }

                  setOffers((prev) => [...prev, offer])
                })
            })
          })
      }
    }
  }, [item])

  return [{ ...task, offers }]
}

export default useTask
