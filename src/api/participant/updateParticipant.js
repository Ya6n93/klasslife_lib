import axios from '../../lib/axios'

const updateParticipant = async (url, token, id, data) => {
  const response = await axios.put(`${url}/participants/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}
