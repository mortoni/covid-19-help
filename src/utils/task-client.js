import { client } from './api-client'

function createTask({ name, description, address }) {
  return client('createTask', { data: { name, description, address } }).then((task) => task)
}

function getTasks() {
  return client('tasks').then((tasks) => tasks)
}

function addOffer({ taskId, user, message }) {
  return client(`task/${taskId}/addOffer`, { data: { user, message }, method: 'PUT' }).then((offer) => offer)
}

export { createTask, getTasks, addOffer }
