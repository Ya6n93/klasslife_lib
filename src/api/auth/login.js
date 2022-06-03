import axios from 'axios'

const Login = async (url, data) => {
  try {
    const response = axios.post(`${url}/login`, data)
    return response.data
  } catch (error) {
    return { error: error.response.data.message, status: error.response.status }
  }
}

export { Login }
