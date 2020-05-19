const functions = require('firebase-functions')
const app = require('express')()

const { getAllTasks, createTask } = require('./APIs/tasks')

app.get('/tasks', getAllTasks)
app.post('/createTask', createTask)

exports.api = functions.https.onRequest(app)
