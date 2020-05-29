import { client } from './api-client'

function createTask({ name, description, address }) {
  return client('createTask', { data: { name, description, address } }).then((task) => task)
}

function getTasks() {
  return client('tasks').then((tasks) => tasks)
}

export { createTask, getTasks }
