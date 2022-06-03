import axios from '../../lib/axios'

const updateMessage = async (url, token, id, data) => {
  const response = await axios.put(`${url}/messages/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { updateMessage }
