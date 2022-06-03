import axios from '../../lib/axios'

const createMessage = async (url, token, data) => {
  const response = await axios.post(`${url}/messages`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createMessage }
