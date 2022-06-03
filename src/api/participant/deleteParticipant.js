import axios from '../../lib/axios'

const deleteParticipant = async (url, token, id) => {
  const response = await axios.delete(`${url}/participants/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { deleteParticipant }
