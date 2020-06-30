import React, { createContext, useReducer } from 'react'

const initialState = {
  onHover: null,
  selected: {},
  offerDialog: false,
}
// TODO rename this context, it will be a context for configuration
const TasksContext = createContext(initialState)
const tasksReducer = (state, { type, value }) => {
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
    default:
      return state
  }
}

const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState)
  const value = { tasks, dispatch }

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}

const TasksContexConsumer = TasksContext.Consumer

export { tasksReducer, TasksContext, TasksProvider, TasksContexConsumer }
