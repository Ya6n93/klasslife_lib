import axios from '../../lib/axios'

async function getMessages(token) {
  const response = await axios.get('/messages', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getMessages }
