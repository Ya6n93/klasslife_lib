import axios from '../../lib/axios'

async function updateParticipant(token, id, data) {
  const response = await axios.put(`/participants/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}
