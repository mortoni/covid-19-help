import React, { createContext, useReducer } from 'react'
// import PropTypes from 'prop-types'

const initialState = {
  onHover: null,
}

const TasksContext = createContext(initialState)
const tasksReducer = (state, { type, value }) => {
  switch (type) {
    case 'hover':
      return {
        ...state,
        onHover: value,
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
