import axios from '../../lib/axios'

async function updateMessage(token, id, data) {
  const response = await axios.put(`/messages/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { updateMessage }
