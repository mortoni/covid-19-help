const { db, admin } = require('../util/admin')

exports.getAll = (request, response) => {
  db.collection('tasks')
    .orderBy('createdAt', 'desc')
    .get()
    .then((data) => {
      let todos = []
      data.forEach((doc) => {
        todos.push({
          taskId: doc.id,
          address: doc.data().address,
          name: doc.data().name,
          username: doc.data().username,
          description: doc.data().description,
          createdAt: doc.data().createdAt,
        })
      })
      return response.json(todos)
    })
    .catch((err) => {
      console.error(err)
      return response.status(500).json({ error: err.code })
    })
}

exports.createTask = (request, response) => {
  if (!request.user.username) {
    return response.status(400).json({ body: 'username Must not be empty' })
  }

  const newTask = {
    name: request.body.name,
    description: request.body.description,
    address: request.body.address,
    username: request.user.username,
    createdAt: new Date().toISOString(),
  }

  db.collection('tasks')
    .add(newTask)
    .then((doc) => {
      const responseTaskItem = newTask
      responseTaskItem.id = doc.id
      // TODO solve this: add then
      db.collection('tasks').doc(doc.id).update({ taskId: doc.id })

      return response.json(responseTaskItem)
    })
    .catch((err) => {
      response.status(500).json({ error: 'Something went wrong' })
      console.error(err)
    })
}

exports.assignTask = (request, response) => {
  const { assignedUser } = request.body
  const taskRef = db.collection('tasks').doc(`${request.params.taskId}`)
  const userRef = db.doc(`/users/${assignedUser.username}`)

  if (!request.user.username) {
    return response.status(400).json({ body: 'username Must not be empty' })
  }

  const p1 = taskRef.update({
    assignedUser,
    status: 'inProgress',
    assignedAt: new Date().toISOString(),
  })

  const p2 = userRef.update({
    acceptedTasks: admin.firestore.FieldValue.arrayUnion(request.params.taskId),
  })

  Promise.all([p1, p2])
    .then(() => response.json('Updated successfully'))
    .catch(() => response.status(500).json({ error: 'Something went wrong' }))
}
