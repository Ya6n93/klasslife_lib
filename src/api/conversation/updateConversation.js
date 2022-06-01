import axios from '../../lib/axios'

async function updateConversation(token, id) {
  const response = await axios.put(`/conversations/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { updateConversation }
