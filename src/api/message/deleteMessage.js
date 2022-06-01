import axios from '../../lib/axios'

async function deleteMessage(token, id) {
  const response = await axios.delete(`/messages/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteMessage }
