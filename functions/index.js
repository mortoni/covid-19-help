const functions = require('firebase-functions')
const app = require('express')()
const cors = require('cors')({ origin: true })

require('dotenv').config()

const { getAll, createTask, assignTask } = require('./APIs/tasks')
const { login, signUp, uploadProfilePhoto, getDetail } = require('./APIs/users')
const { createOffer } = require('./APIs/offers')
const auth = require('./util/auth')

app.use(cors)

app.get('/tasks', getAll)
app.post('/createTask', auth, createTask)
app.post('/task/:taskId/createOffer', auth, createOffer)
app.put('/task/:taskId/assign', auth, assignTask)
app.post('/signup', signUp)
app.post('/login', login)
app.post('/user/image', auth, uploadProfilePhoto)
app.get('/user', auth, getDetail)

exports.api = functions.https.onRequest(app)
