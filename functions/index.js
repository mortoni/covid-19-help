const functions = require('firebase-functions')
const app = require('express')()

const { getAllTasks, createTask } = require('./APIs/tasks')
const { loginUser, signUpUser, uploadProfilePhoto, getUserDetail } = require('./APIs/users')
const auth = require('./util/auth')

app.get('/tasks', auth, getAllTasks)
app.post('/createTask', auth, createTask)
app.post('/signup', signUpUser)
app.post('/login', loginUser)
app.post('/user/image', auth, uploadProfilePhoto)
app.get('/user', auth, getUserDetail)

exports.api = functions.https.onRequest(app)
