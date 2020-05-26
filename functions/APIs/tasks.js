const { db } = require('../util/admin')

exports.getAllTasks = (request, response) => {
  db.collection('tasks')
    .where('username', '==', request.user.username)
    .orderBy('createdAt', 'desc')
    .get()
    .then((data) => {
      let todos = []
      data.forEach((doc) => {
        todos.push({
          todoId: doc.id,
          title: doc.data().title,
          body: doc.data().body,
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
  if (request.body.body.trim() === '') {
    return response.status(400).json({ body: 'Must not be empty' })
  }

  if (request.body.title.trim() === '') {
    return response.status(400).json({ title: 'Must not be empty' })
  }

  const newTodoItem = {
    title: request.body.title,
    body: request.body.body,
    username: request.user.username,
    createdAt: new Date().toISOString(),
  }
  db.collection('todos')
    .add(newTodoItem)
    .then((doc) => {
      const responseTodoItem = newTodoItem
      responseTodoItem.id = doc.id
      return response.json(responseTodoItem)
    })
    .catch((err) => {
      response.status(500).json({ error: 'Something went wrong' })
      console.error(err)
    })
}
