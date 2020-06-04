import { client } from 'utils/api-client'

function createTask({ name, description, address }) {
  return client('createTask', { data: { name, description, address } }).then((task) => task)
}

function getTasks() {
  return client('tasks').then((tasks) => tasks)
}

function addOffer({ taskId, user, message }) {
  return client(`task/${taskId}/addOffer`, { data: { user, message }, method: 'PUT' }).then((offer) => offer)
}

function assignTask({ taskId, assignedUser }) {
  return client(`task/${taskId}/assign`, { data: { assignedUser }, method: 'PUT' }).then((task) => task)
}

export { createTask, getTasks, addOffer, assignTask }
