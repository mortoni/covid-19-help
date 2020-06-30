const { db, admin } = require('../util/admin')

exports.createOffer = (request, response) => {
  const { taskId } = request.params

  const newOffer = {
    message: request.body.message,
    offerOwner: request.user.username,
    createdAt: new Date().toISOString(),
    read: false,
    status: 'pending',
    taskOwner: request.body.taskOwner,
    taskId,
  }

  db.collection('offers')
    .add(newOffer)
    .then((doc) => {
      // TODO: solve this
      db.collection('offers').doc(doc.id).update({ offerId: doc.id })

      db.collection('tasks')
        .doc(taskId)
        .update({
          offers: admin.firestore.FieldValue.arrayUnion(doc.id),
        })
        .then(() => {
          return response.set({ 'Access-Control-Allow-Origin': '*' }).json(doc.id)
        })
        .catch((err) => {
          console.error(err)
          return response.status(500).json({
            error: err.code,
          })
        })
    })
    .catch((err) => {
      console.error(err)
      return response.status(500).json({
        error: err.code,
      })
    })
}
