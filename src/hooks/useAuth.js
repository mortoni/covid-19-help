import React, { createContext, useState, useEffect, useContext } from 'react'
import { navigate } from '@reach/router'
import { ROUTES } from '../routes'
import firebase from 'firebase/app'

const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()

const signin = () => {
  auth.signInWithPopup(provider)
}

const signout = () => {
  auth.signInWithPopup(provider)
}

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authKnown, setAuthKnown] = useState(false)
  const [isAuthenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      console.log('onAuthStateChanged:', user)
      const isLoggedin = !!user
      console.log('isLoggedin', isLoggedin)
      setAuthenticated(isLoggedin)
      setAuthKnown(true)
    })

    return () => unregisterAuthObserver()
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.DASHBOARD)
    } else {
      navigate(ROUTES.LANDINGPAGE)
    }
  }, [isAuthenticated])

  if (!authKnown) {
    return <div>Loading...</div>
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}
