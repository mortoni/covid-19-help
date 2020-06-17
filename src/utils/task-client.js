import { client } from 'utils/api-client'

function createTask({ name, description, address }) {
  return client('createTask', { data: { name, description, address } }).then((task) => task)
}

function getTasks() {
  return client('tasks').then((tasks) => tasks)
}

function addOffer({ taskId, message, taskOwner }) {
  return client(`task/${taskId}/createOffer`, { data: { message, taskOwner }, method: 'POST' }).then((offer) => offer)
}

function assignTask({ taskId, assignedUser }) {
  return client(`task/${taskId}/assign`, { data: { assignedUser }, method: 'PUT' }).then((task) => task)
}

export { createTask, getTasks, addOffer, assignTask }
