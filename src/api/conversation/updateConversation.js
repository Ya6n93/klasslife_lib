import axios from '../../lib/axios'

const updateConversation = async (url, token, id) => {
  const response = await axios.put(`${url}/conversations/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}

export { updateConversation }
