import axios from '../../lib/axios'

async function deleteConversation(token, id) {
  const response = await axios.delete(`/conversations/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteConversation }
