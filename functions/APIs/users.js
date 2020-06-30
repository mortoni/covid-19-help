const { admin, db } = require('../util/admin')
const firebase = require('firebase')
const config = require('../util/config')

firebase.initializeApp(config)

exports.login = (request, response) => {
  const user = {
    email: request.body.email,
    password: request.body.password,
  }

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.getIdToken()
    })
    .then((token) => {
      return response.set({ 'Access-Control-Allow-Origin': '*' }).json({ token })
    })
    .catch((error) => {
      console.error(error)
      return response.status(403).set({ 'Access-Control-Allow-Origin': '*' }).json({
        general: 'wrong credentials, please try again',
      })
    })
}

// Sign up
exports.signUp = (request, response) => {
  const newUser = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    phoneNumber: request.body.phoneNumber,
    address: request.body.address,
    password: request.body.password,
    confirmPassword: request.body.confirmPassword,
    username: request.body.username,
  }
  let token, userId

  db.doc(`/users/${newUser.username}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return response
          .set({ 'Access-Control-Allow-Origin': '*' })
          .status(400)
          .json({ username: 'this username is already taken' })
      } else {
        return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
      }
    })
    .then((data) => {
      userId = data.user.uid
      return data.user.getIdToken()
    })
    .then((idtoken) => {
      token = idtoken
      const userCredentials = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        username: newUser.username,
        phoneNumber: newUser.phoneNumber,
        address: newUser.address,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        userId,
      }
      return db.doc(`/users/${newUser.username}`).set(userCredentials)
    })
    .then(() => {
      return response.set({ 'Access-Control-Allow-Origin': '*' }).status(201).json({ token })
    })
    .catch((err) => {
      console.error(err)
      if (err.code === 'auth/email-already-in-use') {
        return response.set({ 'Access-Control-Allow-Origin': '*' }).status(400).json({ email: 'Email already in use' })
      } else {
        return response
          .set({ 'Access-Control-Allow-Origin': '*' })
          .status(500)
          .json({ general: 'Something went wrong, please try again', err })
      }
    })
}

const deleteImage = (imageName) => {
  const bucket = admin.storage().bucket()
  const path = `${imageName}`
  return bucket
    .file(path)
    .delete()
    .then(() => {
      return
    })
    .catch((error) => {
      return
    })
}

// Upload profile picture
exports.uploadProfilePhoto = (request, response) => {
  const BusBoy = require('busboy')
  const path = require('path')
  const os = require('os')
  const fs = require('fs')
  const busboy = new BusBoy({ headers: request.headers })
  let imageFileName
  let imageToBeUploaded = {}

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    if (mimetype !== 'image/png' && mimetype !== 'image/jpeg') {
      return response
        .set({ 'Access-Control-Allow-Origin': '*' })
        .status(400)
        .json({ error: 'Wrong file type submited' })
    }
    const imageExtension = filename.split('.')[filename.split('.').length - 1]
    imageFileName = `${request.user.username}.${imageExtension}`
    const filePath = path.join(os.tmpdir(), imageFileName)
    imageToBeUploaded = { filePath, mimetype }
    file.pipe(fs.createWriteStream(filePath))
  })

  deleteImage(imageFileName)

  busboy.on('finish', () => {
    admin
      .storage()
      .bucket()
      .upload(imageToBeUploaded.filePath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype,
          },
        },
      })
      .then(() => {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`
        return db.doc(`/users/${request.user.username}`).update({
          imageUrl,
        })
      })
      .then(() => {
        return response.set({ 'Access-Control-Allow-Origin': '*' }).json({ message: 'Image uploaded successfully' })
      })
      .catch((error) => {
        console.error(error)
        return response.set({ 'Access-Control-Allow-Origin': '*' }).status(500).json({ error: error.code })
      })
  })

  busboy.end(request.rawBody)
}

exports.getDetail = (request, response) => {
  let userData = {}

  db.doc(`/users/${request.user.username}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData.userCredentials = doc.data()
        return response.set({ 'Access-Control-Allow-Origin': '*' }).json(userData)
      }
    })
    .catch((error) => {
      console.error(error)
      return response.set({ 'Access-Control-Allow-Origin': '*' }).status(500).json({ error: 'error to fetch user' })
    })
}

exports.updateDetails = (request, response) => {
  let document = db.collection('users').doc(`${request.user.username}`)
  document
    .update(request.body)
    .then(() => {
      response.set({ 'Access-Control-Allow-Origin': '*' }).json({ message: 'Updated successfully' })
    })
    .catch((error) => {
      console.error(error)
      return response.set({ 'Access-Control-Allow-Origin': '*' }).status(500).json({
        message: 'Cannot Update the value',
      })
    })
}
