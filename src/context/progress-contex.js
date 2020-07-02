import React, { createContext, useReducer } from 'react'

const initialState = {
  status: false,
}
const ProgressContext = createContext(initialState)
const progressReducer = (state, { type, value }) => {
  switch (type) {
    case 'active':
      return {
        status: true,
      }
    case 'done':
      return {
        status: false,
      }
    default:
      return state
  }
}

const ProgressProvider = ({ children }) => {
  const [progress, dispatch] = useReducer(progressReducer, initialState)
  const value = { progress, dispatch }

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

const ProgressContexConsumer = ProgressContext.Consumer

export { progressReducer, ProgressContext, ProgressProvider, ProgressContexConsumer }
