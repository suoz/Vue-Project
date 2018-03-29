import axios from '../utils/axios'

export function loginUser(payload) {
  return axios.post('/users/loginUser', payload)
}

export function getUser(payload) {
  return axios.get('/users/getUser', payload)
}
