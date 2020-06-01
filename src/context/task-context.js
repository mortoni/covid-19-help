import React, { createContext, useReducer } from 'react'
// import PropTypes from 'prop-types'

const initialState = {
  onHover: null,
  selected: {},
  offerDialog: false,
}

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

// TasksProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export { tasksReducer, TasksContext, TasksProvider, TasksContexConsumer }
