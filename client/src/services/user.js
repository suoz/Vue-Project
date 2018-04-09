import axios from '../utils/axios'

export function loginUser(payload) {
  return axios.post('/users/loginUser', payload)
}

export function getUser() {
  return axios.get('/users/getUser')
}
