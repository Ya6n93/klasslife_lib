import axios from '../../lib/axios'

async function getConversations(token) {
  const response = await axios.get('/conversations', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}
