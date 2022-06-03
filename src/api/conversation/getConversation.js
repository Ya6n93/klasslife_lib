import axios from '../../lib/axios'

const getConversation = async (url, token, id) => {
  const response = await axios.get(`${url}/conversations/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { getConversation }
