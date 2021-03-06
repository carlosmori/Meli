import axiosInstance from 'axios'

const axios = axiosInstance.create({
  baseURL: 'http://localhost:8500/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
export {axios}
