import axios from '../../lib/axios'

async function deleteParticipant(token, id) {
  const response = await axios.delete(`/participants/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteParticipant }
