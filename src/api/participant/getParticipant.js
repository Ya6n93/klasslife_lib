import axios from '../../lib/axios'

async function getParticipant(token, id) {
  const response = await axios.get(`/participants/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getParticipant }
