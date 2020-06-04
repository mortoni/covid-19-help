const functions = require('firebase-functions')
const app = require('express')()
const cors = require('cors')

const { getAllTasks, createTask, addOffer, assignTask } = require('./APIs/tasks')
const { loginUser, signUpUser, uploadProfilePhoto, getUserDetail } = require('./APIs/users')
const auth = require('./util/auth')

app.use(cors({ origin: true }))

app.get('/tasks', getAllTasks)
app.post('/createTask', auth, createTask)
app.put('/task/:taskId/addOffer', addOffer)
app.put('/task/:taskId/assign', auth, assignTask)
app.post('/signup', signUpUser)
app.post('/login', loginUser)
app.post('/user/image', auth, uploadProfilePhoto)
app.get('/user', auth, getUserDetail)

exports.api = functions.https.onRequest(app)
