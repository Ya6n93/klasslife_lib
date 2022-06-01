import axios from '../../lib/axios'

async function getParticipants(token) {
  const response = await axios.get('/participants', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getParticipants }
