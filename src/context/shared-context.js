import React, { createContext, useReducer } from 'react'

const initialState = {
  onHover: null,
  selected: {},
  offerDialog: false,
  toggledMap: false,
  inProgress: false,
}
// TODO rename this context, it will be a context for configuration
// TODO merge progress context here
const SharedContext = createContext(initialState)
const sharedReducer = (state, { type, value }) => {
  switch (type) {
    case 'hover':
      return {
        ...state,
        onHover: value,
      }
    case 'selectTask':
      return {
        ...state,
        selected: value,
      }
    case 'openOfferDialog':
      return {
        ...state,
        offerDialog: true,
      }
    case 'toggleMap':
      return {
        ...state,
        toggledMap: value,
      }
    case 'progress':
      return {
        ...state,
        inProgress: value,
      }
    default:
      return state
  }
}

const SharedProvider = ({ children }) => {
  const [shared, dispatch] = useReducer(sharedReducer, initialState)
  const value = { shared, dispatch }

  return <SharedContext.Provider value={value}>{children}</SharedContext.Provider>
}

const SharedContexConsumer = SharedContext.Consumer

export { sharedReducer, SharedContext, SharedProvider, SharedContexConsumer }
