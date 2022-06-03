import axios from '../../lib/axios'

const getConversations = async (url, token) => {
  const response = await axios.get(`${url}/conversations`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}
