const functions = require('firebase-functions')
const app = require('express')()
const cors = require('cors')
require('dotenv').config()

const { getAll, createTask, assignTask } = require('./APIs/tasks')
const { login, signUp, uploadProfilePhoto, getDetail } = require('./APIs/users')
const { createOffer } = require('./APIs/offers')
const auth = require('./util/auth')

app.use(cors({ origin: true }))

app.get('/tasks', getAll)
app.post('/createTask', auth, createTask)
// app.put('/task/:taskId/addOffer', addOffer) // TODO delete when create offer is working
app.post('/task/:taskId/createOffer', auth, createOffer)

app.put('/task/:taskId/assign', auth, assignTask)

app.post('/signup', signUp)
app.post('/login', login)
app.post('/user/image', auth, uploadProfilePhoto)
app.get('/user', auth, getDetail)

exports.api = functions.https.onRequest(app)
