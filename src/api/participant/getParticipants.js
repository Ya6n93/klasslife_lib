import axios from '../../lib/axios'

const getParticipants = async (url, token) => {
  const response = await axios.get(`${url}/participants`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getParticipants }
