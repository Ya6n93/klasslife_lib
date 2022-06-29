import axios from '../../lib/axios'

const createMessage = async (url, token, id, data) => {
  const response = await axios.post(`${url}/messages/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createMessage }
