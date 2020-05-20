const functions = require('firebase-functions')
const app = require('express')()

const { getAllTasks, createTask } = require('./APIs/tasks')
const { loginUser, signUpUser } = require('./APIs/users')

app.get('/tasks', getAllTasks)
app.post('/createTask', createTask)
app.post('/signup', signUpUser)
app.post('/login', loginUser)

exports.api = functions.https.onRequest(app)
