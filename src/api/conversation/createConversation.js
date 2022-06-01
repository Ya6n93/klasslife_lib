import axios from '../../lib/axios'

async function createConversation(token, data) {
  const response = await axios.post('/conversations', data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createConversation }
