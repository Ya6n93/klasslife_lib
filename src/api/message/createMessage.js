import axios from '../../lib/axios'

async function createMessage(token, data) {
  const response = await axios.post('/messages', data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createMessage }
