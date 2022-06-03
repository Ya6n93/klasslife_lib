import axios from '../../lib/axios'

const getParticipant = async (url, token, id) => {
  const response = await axios.get(`${url}/participants/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getParticipant }
