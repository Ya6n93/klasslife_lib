import axios from '../../lib/axios'

async function createParticipant(token, data) {
  const response = await axios.post('/participants', data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createParticipant }
