const functions = require('firebase-functions')
const app = require('express')()
const cors = require('cors')
require('dotenv').config()

const { getAllTasks, createTask, addOffer, assignTask, createOffer } = require('./APIs/tasks')
const { loginUser, signUpUser, uploadProfilePhoto, getUserDetail } = require('./APIs/users')
const auth = require('./util/auth')

app.use(cors({ origin: true }))

app.get('/tasks', getAllTasks)
app.post('/createTask', auth, createTask)
app.put('/task/:taskId/addOffer', addOffer) // TODO delete when create offer is working
app.post('/task/:taskId/createOffer', auth, createOffer)

app.put('/task/:taskId/assign', auth, assignTask)

app.post('/signup', signUpUser)
app.post('/login', loginUser)
app.post('/user/image', auth, uploadProfilePhoto)
app.get('/user', auth, getUserDetail)

exports.api = functions.https.onRequest(app)
