import axios from 'axios'

const Login = async (url, data) => {
  const response = axios.post(`${url}/login`, data)
  return response
}

export { Login }
