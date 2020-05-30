const { db } = require('../util/admin')

exports.getAllTasks = (request, response) => {
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
      return response.set({ 'Access-Control-Allow-Origin': '*' }).json(todos)
    })
    .catch((err) => {
      console.error(err)
      return response.set({ 'Access-Control-Allow-Origin': '*' }).status(500).json({ error: err.code })
    })
}

exports.createTask = (request, response) => {
  if (!request.user.username) {
    return response.set({ 'Access-Control-Allow-Origin': '*' }).status(400).json({ body: 'username Must not be empty' })
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
      return response.set({ 'Access-Control-Allow-Origin': '*' }).json(responseTaskItem)
    })
    .catch((err) => {
      response.set({ 'Access-Control-Allow-Origin': '*' }).status(500).json({ error: 'Something went wrong' })
      console.error(err)
    })
}
