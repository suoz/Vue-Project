import axios from '../utils/axios'

export function getInfo(payload) {
  return axios.get('/healthInfo/getHealthInfo', {
    params: payload
  })
}

export function getInfoDetail(payload) {
  return axios.get('/healthInfo/getHealthDetail', {
    params: payload
  })
}
