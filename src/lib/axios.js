import axios from 'axios'

const iaxios = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true
})

iaxios.interceptors.request.use((config) => {
  const newConfig = { ...config }

  return newConfig
})

iaxios.interceptors.response.use(
  (response) => {
    return { data: response.data, status: response.status }
  },
  (error) => {
    return { error: error.response.data.message, status: error.response.status }
  }
)

export default iaxios
