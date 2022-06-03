import axios from '../../lib/axios'

const createParticipant = async (url, token, data) => {
  const response = await axios.post(`${url}/participants`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createParticipant }
