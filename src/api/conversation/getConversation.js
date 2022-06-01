import axios from '../../lib/axios'

async function getConversation(token, id) {
  const response = await axios.get(`/conversations/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getConversation }
