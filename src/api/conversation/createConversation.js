import axios from '../../lib/axios'

const createConversation = async (url, token, data) => {
  const response = await axios.post(`${url}/conversations`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { createConversation }
